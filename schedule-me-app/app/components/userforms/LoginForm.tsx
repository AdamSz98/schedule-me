import * as React from "react";
import Link from "next/link";
import styles from "./styles/loginForm.module.css";
import { useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export interface ILoginFormProps {}

export default function LoginForm(props: ILoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});

    if (!email) {
      setErrors((errors) => ({ ...errors, email: "Please enter your email!" }));
      return;
    }
    if (!password) {
      setErrors((errors) => ({
        ...errors,
        password: "Please enter your password!",
      }));
      return;
    }

    try {
      const result = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
      });

      router.push("./dashboard");

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={styles.loginForm}>
      <div className={styles.intro}>
        <p className={styles.welcomeText}>Welcome Back 👋</p>
        <p className={styles.welcomeAltText}>
          Today is a new day. It's your day. You shape it. Sign in to start
          managing your projects.
        </p>
      </div>

      <form action="" onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label htmlFor="email">Email:</label>
          <input
            title="Please enter your email address"
            type="email"
            placeholder="example@email.com"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size={30}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password">Your password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Link href="/" className={styles.forgotten}>
          Forgot your password?
        </Link>
        <button className={styles.loginButton}>
          <span>Login</span>
        </button>
      </form>
      <div className={styles.socialLogin}>
        <div className={styles.break}>
          <div className={styles.breakLine}></div>
          <p>OR</p>
          <div className={styles.breakLine}></div>
        </div>
        <div className={styles.socialButtons}>
          <button type="button" className={styles.socialButton}>
            <Image
              src="/google_icon.png"
              width={28}
              height={28}
              alt="google icon"
            ></Image>
            <p>Sign in with Google</p>
          </button>
          <button type="button" className={styles.socialButton}>
            <Image
              src="/facebook_icon.png"
              width={28}
              height={28}
              alt="google icon"
            ></Image>
            <p>Sign in with Facebook</p>
          </button>
        </div>
        <p className={styles.noAccount}>
          Don't have an account?
          <Link href="/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

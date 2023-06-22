import * as React from "react";
import Link from "next/link";
import styles from "./styles/loginForm.module.css";
import { useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

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
      <h1>Welcome</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Your email:</label>
          <input
            title="Please enter your email address"
            type="email"
            placeholder="Your email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size={30}
            required
          />
        </div>
        <div>
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
        <button className={styles.loginButton}>Login</button>
        <Link href="./">Forgot your password?</Link>
      </form>
    </div>
  );
}

"use client";

import Image from "next/image";
import * as React from "react";
import styles from "./styles/registerForm.module.css";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import FormError from "./FormError";

export interface IRegisterFormProps {}

export default function RegisterForm(props: IRegisterFormProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [username, setUsername] = useState({});
  const [errors, setErrors] = useState("");

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) {
      setErrors("Please provide an email address");
      return;
    }
    if (!firstName) {
      setErrors("Please provide a first name");
      return;
    }
    if (!lastName) {
      setErrors("Please provide a last name");
      return;
    }
    if (!password) {
      setErrors("Please provide an password");
      return;
    }
    if (!passwordAgain) {
      setErrors("Please provide your password agai");
      return;
    }
    if (password !== passwordAgain) {
      setErrors("Your passwords does not match");
      console.log(errors);
      return;
    }

    try {
      const response = await axios({
        method: "post",
        url: "/api/users/register",
        data: { username, email, firstName, lastName, password },
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
      });

      router.push("/dashboard");
    } catch (error: any) {
      console.log("error", error?.response?.data);
      setErrors(error?.response?.data.split("Error:")[1]);
    }
  }

  return (
    <>
      <div className={styles.registerForm}>
        <div className={styles.intro}>
          <p className={styles.welcomeText}>Join us today👋</p>
        </div>
        {errors && <FormError error={errors} />}

        <form action="" onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <label htmlFor="firstname">First name:</label>
            <input
              id="firstname"
              type="text"
              placeholder="First name"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <label htmlFor="lastname">Last name:</label>
            <input
              id="lastname"
              type="text"
              placeholder="Last name"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              placeholder="example@email.com"
              onChange={(e) => setEmail(e.target.value)}
              size={30}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />{" "}
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="passwordagain">Password again:</label>
            <input
              id="passwordagain"
              type="password"
              placeholder="password again"
              onChange={(e) => setPasswordAgain(e.target.value)}
              required
            />
          </div>

          <button className={styles.loginButton}>
            <span>Register</span>
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
            Already have an account?
            <Link href="/login">Sign in</Link>
          </p>
        </div>
      </div>
    </>
  );
}

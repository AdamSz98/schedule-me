"use client";

import * as React from "react";
import { useState } from "react";
import styles from "./styles/loginForm.module.css";

export interface IPasswordResetProps {}

export default function PasswordReset(props: IPasswordResetProps) {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    console.log(e);
    e.preventDefault();

    if (!email) {
      setErrors((errors) => ({
        ...errors,
        email: "Please provide an email address",
      }));
      return;
    }
  }

  return (
    <div className={styles.loginForm}>
      <div className={styles.intro}>
        <p className={styles.welcomeText}>OOOOOOF </p>
        <p className={styles.welcomeAltText}>
          Don't worry it can appen to everyone, just provide your email and we
          will e-mail you a reset code.
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
        <button className={styles.loginButton}>
          <span>Send</span>
        </button>
      </form>
    </div>
  );
}

"use client";

import * as React from "react";
import styles from "./styles/registerForm.module.css";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

export interface IRegisterFormProps {}

export default function RegisterForm(props: IRegisterFormProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [errors, setErrors] = useState({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (!email) {
      setErrors((errors) => ({
        ...errors,
        email: "Please provide an email address",
      }));
      return;
    }
    if (!firstName) {
      setErrors((errors) => ({
        ...errors,
        firstName: "Please provide a first name",
      }));
      return;
    }
    if (!lastName) {
      setErrors((errors) => ({
        ...errors,
        lastName: "Please provide a last name",
      }));
      return;
    }
    if (!password) {
      setErrors((errors) => ({
        ...errors,
        password: "Please provide a password",
      }));
      return;
    }
    if (!passwordAgain) {
      setErrors((errors) => ({
        ...errors,
        password: "Please provide your password again",
      }));
      return;
    }
    if (password !== passwordAgain) {
      setErrors((errors) => ({
        ...errors,
        passwordCheck: "Your passwords does not match",
      }));
      return;
    }

    try {
      const res = axios.post("/api/register", {
        email,
        firstName,
        lastName,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.registerForm}>
      <h1>Sign Up</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className={styles.name}>
          <input
            type="text"
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last name"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          size={30}
          required
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="password again"
          onChange={(e) => setPasswordAgain(e.target.value)}
          required
        />
        <button className={styles.registerButton}>Register</button>
        <p>
          Already have an account? <Link href="/register">Login here.</Link>
        </p>
      </form>
    </div>
  );
}

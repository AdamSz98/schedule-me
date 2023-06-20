"use client";

import * as React from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Link from "next/link";
import styles from "./styles/userform.module.css";
import Image from "next/image";
import photo from "../../../public/photo-1553272725-086100aecf5e.avif";
import { usePathname } from "next/navigation";

export interface IUserFormProps {
  type: string;
}

export default function UserForm(props: IUserFormProps) {
  const path = usePathname();
  const isLoginPage = path === "/login";
  const isRegisterPage = path === "/register";
  const loginLinkStyle = isLoginPage
    ? `${styles.linkContainer} ${styles.active}`
    : styles.linkContainer;

  const registerLinkStyle = isRegisterPage
    ? `${styles.linkContainer} ${styles.active}`
    : styles.linkContainer;



  return (
    <div className={styles.userform}>
      <div className={styles.pictureContainer}>
        <Image src={photo} alt="Scheduling photo" className={styles.picture} />
      </div>
      <div className={styles.right}>
        <div className={styles.links}>
          <div className={loginLinkStyle}>
            <Link href="/login" className={styles.link}>
              Login
            </Link>
          </div>
          <div className={registerLinkStyle}>
            <Link href="/register">Register</Link>
          </div>
        </div>
        {props.type === "login" && <LoginForm />}{" "}
        {props.type === "register" && <RegisterForm />}
      </div>
    </div>
  );
}

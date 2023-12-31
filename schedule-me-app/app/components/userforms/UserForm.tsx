import * as React from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import styles from "./styles/userform.module.css";
import Image from "next/image";
import photo from "../../../public/photo-1553272725-086100aecf5e.avif";
import PasswordReset from "./PasswordResetForm";

export interface IUserFormProps {
  type: string;
}

export default function UserForm(props: IUserFormProps) {
  return (
    <div className={styles.userform}>
      <div className={styles.leftSide}>
        {props.type === "login" && <LoginForm />}{" "}
        {props.type === "register" && <RegisterForm />}
        {props.type === "reset" && <PasswordReset />}
      </div>
      <div className={styles.pictureContainer}>
        <Image src={photo} alt="Scheduling photo" className={styles.picture} />
      </div>
    </div>
  );
}

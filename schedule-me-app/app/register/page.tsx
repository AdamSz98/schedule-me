import * as React from "react";
import UserForm from "../components/userforms/UserForm";

export interface IRegisterProps {}

export default function Register(props: IRegisterProps) {
  return (
    <div>
      <UserForm type="register" />
    </div>
  );
}

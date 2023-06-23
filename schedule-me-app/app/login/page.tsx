import * as React from "react";
import UserForm from "../components/userforms/UserForm";

export interface ILoginnProps {}

export default function Login(props: ILoginnProps) {
  return (
    <>
      <UserForm type="login" />
    </>
  );
}

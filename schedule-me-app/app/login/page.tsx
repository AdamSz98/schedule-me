import * as React from "react";
import UserForm from "../components/userforms/UserForm";

export interface ILoginnProps {}

export default function Loginn(props: ILoginnProps) {
  return (
    <div>
      <UserForm type="login" />
    </div>
  );
}

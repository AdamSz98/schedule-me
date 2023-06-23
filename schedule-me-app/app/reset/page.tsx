import * as React from "react";
import UserForm from "../components/userforms/UserForm";

export interface IResetPasswordProps {}

export default function ResetPassword(props: IResetPasswordProps) {
  return (
    <>
      <UserForm type="reset" />
    </>
  );
}

import * as React from "react";
import style from "./styles/errors.module.css";

export interface IFormErrorProps {
  error: string;
}

export default function FormError({ error }: IFormErrorProps) {
  return (
    <div className={style.errorContainer}>
      <p>{error}</p>
    </div>
  );
}

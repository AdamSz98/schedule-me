"use client";

import * as React from "react";
import style from "./styles/styles.module.css";
import Navbar from "../components/dashboard/Navbar";
import { useSession } from "next-auth/react";

export interface INavigationProps {
  children: any;
}



export default function DashboardLayout(props: INavigationProps) {
  const { data: session, status }: any = useSession();



  return (
    <>
      {status === "authenticated" && (
        <div className={style.layout}>
          <Navbar />
        </div>
      )}
      {props.children}
    </>
  );
}

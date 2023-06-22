"use client";

import * as React from "react";
import style from "./styles/styles.module.css";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export interface INavigationProps {
  children: any;
}

export default function DashboardLayout(props: INavigationProps) {
  const router = useRouter();
  function signingOut(): void {
    signOut({ redirect: false, callbackUrl: "/login" });
    router.push("/");
  }
  //külön szedni
  return (
    <div className={style.layout}>
      <nav className={style.sidebar}>
        <Link href={"/dashboard"}>Home</Link>
        <Link href={"/dashboard"}>My profile</Link>
        <Link href={"/dashboard"}>Home</Link>
        <Link href={"/dashboard"}>Home</Link>
        <Link href={"/dashboard"}>Settings</Link>
        {/* //külön a gombot is */}
        <button type="button" onClick={signingOut}>
          Log out
        </button>
      </nav>
      {props.children}
    </div>
  );
}

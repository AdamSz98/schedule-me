"use client";

import * as React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export interface IUserProfileNavProps {}

export default function UserProfileNav(props: IUserProfileNavProps) {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return <div>{session.user.Username}</div>;
  } else {
    return (
      <div>
        <Link href="/login">Login</Link>
      </div>
    );
  }
}

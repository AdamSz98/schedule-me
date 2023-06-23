"use client";

import * as React from "react";
import { useSession } from "next-auth/react";
import Loading from "./loading";

export interface IOldalProps {}

export default function Oldal(props: IOldalProps) {
  const { data: session, status }: any = useSession();

  if (status === "loading") {
    return <h1>"Loading.."</h1>;
  }

  if (status === "unauthenticated") {
    return <h1>Please login in order to see your dashboard</h1>;
  }

  if (status === "authenticated") {
    return (
      <div>
        <h1>Username: {session?.user?.Username}</h1>
        <h2>MINDENFÉLE CONTENNT LESZ ITT DEJAU</h2>
      </div>
    );
  }
}

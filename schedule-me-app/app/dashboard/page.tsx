"use client";

import * as React from "react";
import { useSession } from "next-auth/react";

export interface IOldalProps {}

export default function Oldal(props: IOldalProps) {
  const { data: session, status }: any = useSession();
  return (
    <div>
      <h1>Username: {session?.user?.Username}</h1>
    </div>
  );
}

import * as React from "react";
import UserProfileNav from "../components/profile/UserNavProfile";

export interface IProfileNavProps {
  children: any;
}

export default function ProfileNav({ children }: IProfileNavProps) {
  /* const { data: session, status } = useSession(); */
  return (
    <>
      <UserProfileNav></UserProfileNav>
      {children}
    </>
  );
}

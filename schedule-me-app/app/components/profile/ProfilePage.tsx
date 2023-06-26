import * as React from "react";
import style from "./styles/profilepage.module.css";

export interface IProfilePageProps {
  user: string;
}

//látszat kedvéért csak

export default function ProfilePage({ user }: IProfilePageProps) {
  //awaitelheti itt a user infokat
  return (
    <div>
      <p>PROFILE INFOS STB</p>
      <p>Image of {user}</p>
      <p>Introduction of {user}</p>
      <p>{user}</p>
    </div>
  );
}

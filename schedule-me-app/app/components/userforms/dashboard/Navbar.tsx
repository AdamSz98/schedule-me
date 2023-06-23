import * as React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Link from "next/link";
import style from "./styles/navbar.module.css";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

export interface INavbarProps {}

export default function Navbar(props: INavbarProps) {
  const { data: session, status }: any = useSession();
  const router = useRouter();
  function signingOut(): void {
    signOut({ redirect: false, callbackUrl: "/login" });
    router.push("/");
  }
  return (
    <>
      <div className={style.navbar}>
        <h1>Schedule me</h1>
        <div className={style.navbarLeft}>
          <nav>
            <ul>
              <li>
                <Link href="/home" className={style.navLink}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/home" className={style.navLink}>
                  Availability
                </Link>
              </li>
              <li>
                <Link href="/home" className={style.navLink}>
                  My events
                </Link>
              </li>
              <li>
                <Link href="/home" className={style.navLink}>
                  Home
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className={style.profile}>
          <Image
            src="/email_icon.png"
            alt="Messages"
            width={28}
            height={28}
          ></Image>
          <Image
            src="/profile_placeholder.jpg"
            alt="Profile picture"
            width={28}
            height={28}
          ></Image>
          <button className={style.logoutBtn} onClick={signingOut}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

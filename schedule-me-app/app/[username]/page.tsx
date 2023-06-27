"use client";

import * as React from "react";
import UserCalendar from "../components/profile/UserCalendar";
import DailyView from "../components/profile/DailyView";
import ProfilePage from "../components/profile/ProfilePage";
import style from "./styles/userprofile.module.css";
import { useState } from "react";
import { useSession } from "next-auth/react";

export interface IUserProfileProps {}

export default function UserProfile({ params }: any) {
  //Profilepagebe fetchel majd a cuccokat
  const [showAvailableSessions, setShowAvailableSessions] = useState(false);
  const { data: session, status } = useSession();
  const [dayView, setDayView] = useState({});

  function showSessions(calendarDate: Date) {
    setDayView({
      start: 6,
      end: 7,
      scheduled: false,
      activityDate: calendarDate,
      day: 26,
      month: 6,
    });
    if (status === "authenticated") {
      if (showAvailableSessions) {
        return;
      }
      setShowAvailableSessions((prev) => !prev);
    } else {
      alert("You must login too see a user's sessions");
    }
  }

  const dailyData = [
    {
      start: 6,
      end: 7,
      scheduled: false,
      activityDate: new Date(),
      day: 26,
      month: 6,
    },
    {
      start: 7,
      end: 8,
      scheduled: true,
      activityDate: new Date(),
      day: 24,
      month: 6,
    },
    {
      start: 10,
      end: 12,
      scheduled: true,
      activityDate: new Date(),
      day: 8,
      month: 5,
    },
    {
      start: 10,
      end: 12,
      scheduled: false,
      activityDate: new Date(),
      day: 26,
      month: 5,
    },
  ];

  return (
    <>
      <h1>Userprofile: {params.username}</h1>
      <div className={style.userAndCalendar}>
        <UserCalendar dailyData={dailyData} showSession={showSessions} />
        <ProfilePage user={params.username} />
      </div>

      {showAvailableSessions && (
        <DailyView dailyData={dailyData} dayView={dayView} />
      )}
    </>
  );
}

import * as React from "react";
import UserCalendar from "../components/profile/UserCalendar";
import DailyView from "../components/profile/DailyView";

export interface IUserProfileProps {}

export default async function UserProfile({ params }: any) {
  /*   const userProfile = await akármi */
  //fetcheli majd a user profilet ha van, ha ninncs akkor error
  //ha a usernek egy napra van időpontja az legyen zöld
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
      <UserCalendar dailyData={dailyData} />
      <DailyView dailyData={dailyData} />
    </>
  );
}

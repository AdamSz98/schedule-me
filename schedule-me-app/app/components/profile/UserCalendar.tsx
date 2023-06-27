"use client";

import * as React from "react";
import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import styles from "./styles/calendar.module.css";
import { useEffect } from "react";

export interface IUserCalendarProps {
  dailyData: any;
  showSession: Function;
}

export default function UserCalendar({
  dailyData,
  showSession,
}: IUserCalendarProps) {
  //propba megkapja mikor vannak szabad időpontok és az a háttér zöld lesz

  const date = new Date();

  const daysFromMonth = dailyData.map((item: { day: number }) => item.day);
  const months = dailyData.map((item: { month: number }) => item.month);

  function handleCalendarClick(e: any) {
    console.log(e);
    showSession(e);
  }

  return (
    <>
      <Calendar
        onChange={(e) => handleCalendarClick(e)}
        minDate={date}
        className="react-calendar"
        tileClassName={({ date, view }) => {
          if (
            daysFromMonth.includes(date.getDate()) &&
            months.includes(date.getMonth())
          ) {
            return styles.highlight;
          }
        }}
      />
    </>
  );
}

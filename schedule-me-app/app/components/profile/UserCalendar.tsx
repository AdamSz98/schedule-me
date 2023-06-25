"use client";

import * as React from "react";
import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import styles from "./styles/calendar.module.css";

export interface IUserCalendarProps {
  dailyData: any;
}

export default function UserCalendar({ dailyData }: IUserCalendarProps) {
  //propba megkapja mikor vannak szabad időpontok és az a háttér zöld lesz
  const dateNow = new Date();

  const daysFromMonth = dailyData.map((item: { day: number }) => item.day);
  const months = dailyData.map((item: { month: number }) => item.month);

  return (
    <>
      <Calendar
        onChange={() => {}}
        value={"2"}
        className="react-calendar"
        minDate={new Date()}
        maxDate={new Date(dateNow.setMonth(dateNow.getMonth() + 1))}
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

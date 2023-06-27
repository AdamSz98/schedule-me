import * as React from "react";
import JoinSession from "./JoinSession";

export interface IDailyViewProps {
  dailyData: { start: number; end: number; scheduled: boolean }[];
  dayView: any;
}

export default function DailyView({ dailyData, dayView }: IDailyViewProps) {
  //userek igy megadhatják
  //propba megkapja mettől meddig melyik dátumon foglalható
  //csak a naptár alapján rendereli a datet

  return (
    <>
      <div>
        <JoinSession start={dayView.start} end={dayView.end} />;
      </div>
      <p>CALENDAR CLICKED INFO: {dayView.activityDate.toLocaleString()}</p>
    </>
  );
}

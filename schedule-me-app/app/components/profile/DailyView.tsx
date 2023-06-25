import * as React from "react";
import JoinSession from "./JoinSession";

export interface IDailyViewProps {
  dailyData: { start: number; end: number; scheduled: boolean }[];
}

export default function DailyView({ dailyData }: IDailyViewProps) {
  //userek igy megadhatják
  //propba megkapja mettől meddig melyik dátumon foglalható
  //csak a naptár alapján rendereli a datet

  const avaibality = dailyData.map((time) => {
    if (!time.scheduled) {
      return (
        <div>
          <p>{time.start}</p>
          <p>{time.end}</p>
          <p>Already scheduled</p>
        </div>
      );
    } else {
      return <JoinSession start={time.start} end={time.end} />;
    }
  });
  return (
    <>
      <div>{avaibality}</div>
    </>
  );
}

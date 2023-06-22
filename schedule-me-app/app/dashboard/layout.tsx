import * as React from "react";

export interface INavigationProps {
  children: any;
}

export default function Navigation(props: INavigationProps) {
  return (
    <div>
      <h1>NAVBAR </h1>
      {props.children}
    </div>
  );
}

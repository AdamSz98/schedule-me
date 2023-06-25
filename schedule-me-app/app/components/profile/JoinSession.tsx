import * as React from "react";

export interface IJoinSessionProps {
  start: any;
  end: any;
}

export default function JoinSession({ start, end }: IJoinSessionProps) {
  return (
    <div>
      <p>
        A session from {start} to {end} is available
      </p>
      <input type="text" name="message" id="" placeholder="Leave a message" />
      <button>Join</button>
    </div>
  );
}

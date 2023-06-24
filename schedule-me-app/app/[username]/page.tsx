import * as React from "react";

export interface IUserProfileProps {}

export default async function UserProfile({ params }: any) {
  /*   const userProfile = await akármi */
  //fetcheli majd a user profilet ha van, ha ninncs akkor error
  return (
    <div>
      <h1>Userprofile: {params.username}</h1>
    </div>
  );
}

import React from "react";
import { UserButton, currentUser } from "@clerk/nextjs";

export default async function Form() {
  const user = await currentUser();
  return (
    <>
      Hello {user?.firstName}
      <UserButton afterSignOutUrl="/" />
      <div className=" text-center m-4 text-3xl">Book a Slot</div>
    </>
  );
}

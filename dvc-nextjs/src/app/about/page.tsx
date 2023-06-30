import React from "react";
import { UserButton } from "@clerk/nextjs";

export default function About() {
  return (
    <>
      <div className=" text-center m-4 text-3xl">About</div>
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
}

import React from "react";
import { AiFillPushpin } from "react-icons/ai";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-start bg-yellow-200 p-2 md:pl-4">
        <AiFillPushpin className="text-4xl text-yellow-600" />
        <h1 className="text-4xl text-yellow-600 pl-2 font-mono"> Keeper</h1>
      </div>
    </>
  );
}

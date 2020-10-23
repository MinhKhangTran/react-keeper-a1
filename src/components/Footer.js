import React from "react";

export default function Footer() {
  return (
    <>
      <div className="">
        <h1
          className="text-gray-400 md:text-3xl text-xl fixed bottom-0 transform -translate-x-1/2"
          style={{ left: "50%" }}
        >
          {new Date().getFullYear()} MKT
        </h1>
      </div>
    </>
  );
}

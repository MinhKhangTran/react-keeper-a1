import React from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

export default function KeeperItem({ id, titel, notiz, removeItem, editItem }) {
  return (
    <article className="bg-yellow-200 inline-block p-4 rounded-lg relative">
      <h1 className="font-semibold">{titel}</h1>
      <h2>{notiz}</h2>
      <button
        className="absolute  text-2xl text-yellow-700 bg-yellow-400 rounded-full h-12 w-12"
        style={{ right: "14%", bottom: "-25%" }}
        onClick={() => {
          editItem(id);
        }}
      >
        <AiOutlineEdit className="ml-3" />
      </button>
      <button
        className="absolute text-2xl text-yellow-700 bg-yellow-400 rounded-full h-12 w-12"
        style={{ right: "0%", bottom: "-25%" }}
        onClick={() => {
          removeItem(id);
        }}
      >
        <AiOutlineDelete className="ml-3" />
      </button>
    </article>
  );
}

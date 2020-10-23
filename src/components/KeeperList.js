import React from "react";
import KeeperItem from "./KeeperItem";

export default function KeeperList({ list, removeItem, editItem }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-4 w-11/12 mx-auto my-8">
      {list.map((item) => {
        return (
          <KeeperItem
            key={item.id}
            {...item}
            removeItem={removeItem}
            editItem={editItem}
          />
        );
      })}
    </section>
  );
}

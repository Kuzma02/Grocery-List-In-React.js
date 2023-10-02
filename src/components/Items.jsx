import React from "react";
import { SingleItem } from "./SingleItem";

export const Items = ({ items, removeItem, editItem }) => {
  return (
    <div className="items">
      {items && items.map((item, index) => (
        <SingleItem removeItem={removeItem} editItem={editItem} item={item} key={item.id} />
      ))}
    </div>
  );
};

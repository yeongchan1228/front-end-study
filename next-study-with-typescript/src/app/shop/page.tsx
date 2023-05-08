"use client";

import { useState } from "react";
import Link from "next/link";

interface ItemsType {
  names: string[];
  prices: number[];
  counts: number[];
}

export default function List() {
  const items: ItemsType = {
    names: ["car", "coffee", "soda"],
    prices: [1000000, 800000, 40000],
    counts: [0, 0, 0],
  };

  const [counts, setCounts] = useState([...items.counts]);
  return (
    <div>
      <h4 className="title">
        상품 목록{" "}
        <Link
          href="/shop/cart"
          style={{ textDecoration: "none", color: "red" }}
        >
          Go Cart!
        </Link>
      </h4>
      {items.names.map((item, idx) => {
        return (
          <div className="item" key={idx}>
            <img src={`/item${idx}.png`} className="item-img" alt="차" />
            <h4>
              {item} ${items.prices[idx]}
            </h4>
            <span> {counts[idx]} </span>
            <button
              onClick={() => {
                counts[idx]++;
                const copy = [...counts];
                setCounts([...copy]);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                if (counts[idx] > 0) {
                  counts[idx]--;
                  const copy = [...counts];
                  setCounts([...copy]);
                }
              }}
            >
              -
            </button>
          </div>
        );
      })}
    </div>
  );
}

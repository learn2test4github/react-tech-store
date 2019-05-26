import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default function Cart({ history }) {
  return (
    <section className="py-5">
      {/* title */}
      <div className="container">
        <Title title="your cart items" center />
      </div>
      {/* Cart Columns */}
      <CartColumns />
      {/* Cart List */}
      <CartList />
      {/* Cart Totals */}
      <CartTotals history={history} />
    </section>
  );
}

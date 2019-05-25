import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default class Cart extends Component {
  render() {
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
        <CartTotals />
      </section>
    );
  }
}

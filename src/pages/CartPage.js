import React from "react";
import CartSection from "../components/CartPage";
import Hero from "../components/Hero";
import cartbcg from "../images/storeBcg.jpeg";

export default function CartProduct(props) {
  console.log(props);

  return (
    <>
      <Hero img={cartbcg} />
      <CartSection history={props.history} />
    </>
  );
}

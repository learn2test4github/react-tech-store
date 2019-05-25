import React from "react";
import CartSection from "../components/CartPage";
import Hero from "../components/Hero";
import cartbcg from "../images/storeBcg.jpeg";

export default function CartProduct() {
  return (
    <>
      <Hero img={cartbcg} />
      <CartSection />
    </>
  );
}

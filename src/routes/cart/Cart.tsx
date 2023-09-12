import { useState } from "react";
import "./Cart.css";
import { Card } from "../../components/card/card";
import { FoodData } from "../../interface/FoodData";
import { useFoodData } from "../../hooks/useFoodData";
import { CreateModal } from "../../components/create-modal/create-modal";
import NavbarMenu from "../../components/menu/menu";

function Cart() {
  return (
    <div className="container">
      <NavbarMenu /> {/* Renderize o menu aqui */}
      <h1>Carrinho</h1>
    </div>
  );
}

export default Cart;

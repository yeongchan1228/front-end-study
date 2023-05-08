"use client";

import { CartItemForm } from "@/components/cart/catItem.style";

interface CartItemType {
  itemName: string;
}

const CartItem = ({ itemName }: CartItemType) => {
  return (
    <CartItemForm>
      <p>{itemName}</p>
      <p>$40</p>
      <p>1개</p>
    </CartItemForm>
  );
};

export default CartItem;

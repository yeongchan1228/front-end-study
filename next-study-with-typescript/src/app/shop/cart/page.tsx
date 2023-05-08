import CartItem from "@/components/cart/cartItem";

export default function Cart() {
  const itemNames = ["Car", "Coffee"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      {itemNames.map((itemName, idx) => {
        return <CartItem key={idx} itemName={itemName}></CartItem>;
      })}
    </div>
  );
}

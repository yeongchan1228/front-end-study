import { memo, useMemo } from "react";

const heavy = () => {
  for (let i = 0; i < 100; i++) {
    console.log(i);
  }
};

const CartBody = memo(({ item }) => {
  const result = useMemo(() => {
    heavy();
  });
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>{"count" in item ? item.count : 0}</td>
      <td>{item.price}</td>
    </tr>
  );
});

export default CartBody;

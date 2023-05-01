import { useSelector } from "react-redux";
import styled from "styled-components";
import CartBody from "./body";
import { useState } from "react";

const Cart = () => {
  const data = useSelector((state) => state.data);
  const [fields, setFields] = useState(["#", "상품명", "수량", "가격"]);

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>{fields[0]}</th>
            <th>{fields[1]}</th>
            <th>{fields[2]}</th>
            <th>{fields[3]}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return <CartBody item={item} key={item.id}></CartBody>;
          })}
        </tbody>
      </Table>
      {/* 자식 재렌더링 막기 테스트 */}
      <button
        style={{ margin: "10px" }}
        onClick={() => {
          const copy = [...fields];
          copy[2] = "Count";
          setFields([...copy]);
        }}
      >{`수량 -> Count`}</button>
    </TableContainer>
  );
};

const TableContainer = styled.div`
  text-align: center;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th {
    padding: 20px;
  }
  td {
    border-bottom: 1px solid #bf7aa0;
    padding: 10px;
  }
  thead {
    border-bottom: 3px solid #bf7aa0;
  }
`;

export default Cart;

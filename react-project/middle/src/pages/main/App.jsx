import { useState } from "react";
import "./App.css";
import bg from "img/bg.png";
import Item from "pages/items/item";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addData } from "store/dataSlice";
import { addItemCount } from "store/ItemCountSlice";
import { useQuery } from "react-query";

function App() {
  const [items, setItems] = useState(useSelector((state) => state.data));
  let [itemCount, setItemCount] = useState(
    useSelector((state) => state.itemCount)
  );
  const dispatch = useDispatch();

  // const result = useQuery("작명", () => {
  //   return axios
  //     .get("uri")
  //     .then((res) => {
  //       console.log("!!");
  //       return res.data;
  //     });
  // });

  return (
    <div className="App">
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "100%",
          backgroundPosition: "center",
          height: "400px",
        }}
      ></div>

      <div className="list-container">
        {items.map((item, idx) => {
          return <Item item={item} key={idx}></Item>;
        })}
      </div>
      {itemCount <= 2 ? (
        <button
          onClick={() => {
            setItemCount(itemCount + 1);
            dispatch(addItemCount());
            axios
              .get("uri")
              .then((res) => {
                dispatch(addData(res.data));
                const copy = [...items, ...res.data];
                setItems([...copy]);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          더보기
        </button>
      ) : null}
    </div>
  );
}

/**
 * 삼항 연산자 없이 if문으로 원하는 컴포넌트 반환
 */
const TapContent = ({ tap }) => {
  if (tap === 0) {
    return <div>0</div>;
  } else if (tap === 1) {
    return <div>1</div>;
  } else if (tap === 2) {
    return <div>2</div>;
  }
};

export default App;

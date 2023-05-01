import { useParams } from "react-router-dom";
import { useState, useEffect, useTransition, useDeferredValue } from "react";
import styled, { keyframes } from "styled-components";
import { useSelector } from "react-redux";

const Detail = () => {
  const data = useSelector((state) => state.data);
  const [items] = useState(data);
  const [showAlert, setShowAlert] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  }, []);

  return (
    <ContainerDiv>
      {showAlert ? <AlertDiv>2초 이내 구매시, 할인!!!!</AlertDiv> : null}
      <ItemImage src={items[id].imageSrc}></ItemImage>
      <h4>{items[id].title}</h4>
      <p>{items[id].content}</p>
      <p>{items[id].price}원</p>
      <DetailBtn bg="black">주문하기</DetailBtn>
    </ContainerDiv>
  );
};

const fadeInOut = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const DetailBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg === "black" ? "white" : "black")};
  padding: 10px;
`;

const ContainerDiv = styled.div`
  display: block;
  text-align: center;
  animation: ${fadeInOut} 1s;
`;

const AlertDiv = styled.div`
  background: pink;
  padding: 30px;
  margin: 10px;
  border-radius: 10px;
`;

const ItemImage = styled.img`
alt="error" width="80%"
`;

export default Detail;

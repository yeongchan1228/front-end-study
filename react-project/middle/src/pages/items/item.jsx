import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Item = ({ item }) => {
  const navigate = useNavigate();
  const defaultImage = process.env.PUBLIC_URL + "/default-item.png";
  return (
    <Content
      onClick={() => {
        navigate(`detail/${item.id}`);
      }}
    >
      <img
        src={"imageSrc" in item ? item.imageSrc : defaultImage}
        width="50%"
        alt="error"
      ></img>
      <h4>{item.title}</h4>
      <p>{item.price}</p>
    </Content>
  );
};

const Content = styled.div`
  width: 50%;
  margin: 20px;
`;

export default Item;

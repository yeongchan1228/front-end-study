import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <Navbar>
      <h4>Shop</h4>
      <NavBtn
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </NavBtn>
      <NavBtn
        onClick={() => {
          navigate("/cart");
        }}
      >
        Cart
      </NavBtn>
    </Navbar>
  );
};

const Navbar = styled.div`
  display: flex;
  position: sticky;
  background: black;
  padding: 30px;
  color: white;
  top: 0px;
  font-size: 25px;
  h4 {
    margin: 0px;
    text-align: left;
  }
  p {
    margin: 0px;
    text-align: left;
    margin-left: 20px;
  }
`;

const NavBtn = styled.button`
  border: 0;
  background-color: transparent;
  color: white;
  font-size: 18px;
  margin-left: 20px;
  padding-top: 8px;

  &:hover {
    opacity: 0.5;
  }
`;

export default Nav;

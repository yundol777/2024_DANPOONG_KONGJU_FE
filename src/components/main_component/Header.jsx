import styled from "styled-components";
import Icons from "../../asset/Icons";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.div`
  width: 100%;
  padding: 50px 5% 8px 5%;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  z-index: 5;

  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: clamp(15px, 4vw, 20px);
  }
`;

const Header = ({ title }) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <HeaderContainer>
      <h1>{title}</h1>
    </HeaderContainer>
  );
};

export default Header;

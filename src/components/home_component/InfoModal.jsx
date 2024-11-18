import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

const InformationContainer = styled.div`
  font-size: clamp(12px, 3vw, 1rem);
`;
const InformationPage = () => {
  const { marker } = useOutletContext();
  return (
    <InformationContainer>{marker && marker.description}</InformationContainer>
  );
};

export default InformationPage;
import styled from "styled-components";
import { Colors } from "../../theme/DesignTokens";

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

const CoomingSoonContainer = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: ${Colors.WHITE};
color: ${Colors.DARKBLUE};
`;


const ComingSoonStyles = {
  MainContainer,
  CoomingSoonContainer
}

export default ComingSoonStyles;
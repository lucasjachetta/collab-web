import styled from "styled-components"
import { Colors } from '../../theme/DesignTokens'

export const Button = styled.button`
  background: ${(props) => props.variant  === "secondary" ?  Colors.WHITE : Colors.DARKBLUE};
  color: ${props => props.variant  === "secondary" ?  Colors.DARKBLUE : Colors.WHITE};
  padding: 0px 15px;
  min-width: 90px;
  border: 1px solid ${Colors.DARKBLUE};
  border-radius: 15px;
  height: 40px;
  width: max-content;
  cursor: pointer;

`;

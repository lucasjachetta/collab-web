import styled from "styled-components"
import { Colors, FontSizes, FontWeights} from '../../theme/DesignTokens'

const MainContainer = styled.div `
    display: flex;
    height: 100vh;
    width: 100vw;
`

const LeftContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    background-color: ${Colors.SECONDARY};
    height: 100%;
    width: 30%;
    
`

const RightContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.WHITE};
    height: 100%;
    width: 70%;    
`

const CenterContainer = styled.div`
    display: flex;
    height: 30%;
    width: 30%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
const ButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    

`


const RegisterStyles = {
    MainContainer,
    RightContainer,
    LeftContainer,
    CenterContainer,
    ButtonsContainer
}


export default RegisterStyles;
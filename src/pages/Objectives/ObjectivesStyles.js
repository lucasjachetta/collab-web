import styled from "styled-components"
import { Colors, FontSizes, FontWeights} from '../../theme/DesignTokens'

const MainContainer = styled.div `
    height: 100vh;
    width: 100vw;
    display: flex;
`

const InfoContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10%;
`
const InfoItem = styled.div`

    height: 100px;
    width: 400px;
    background-color: ${Colors.SECONDARY};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${Colors.WHITE};
    padding: 10px;
    border-radius: 20px;
`


const HomeStyles = {
    MainContainer,
    InfoContainer,
    InfoItem

}


export default HomeStyles;
import styled from "styled-components"
import { Colors, FontSizes, FontWeights} from '../../theme/DesignTokens'

const MainContainer = styled.div `
    height: 100vh;
    width: 100vw;
    display: flex;
`
const PageContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const ObjectivesHeader = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: ${Colors.DARKBLUE};
    font-weight: bold;
    padding-right: 50px;
`

const ObjectivesDescription = styled.div`
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center ;
    color: ${Colors.MEDIUMGRAY};
    font-weight: bold;
`

const Objectives = styled.div`
    height: 70%;
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around ;
`


const HomeStyles = {
    MainContainer,
    PageContainer,
    ObjectivesHeader,
    ObjectivesDescription,
    Objectives

}


export default HomeStyles;
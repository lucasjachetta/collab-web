import styled from "styled-components"
import { Colors, FontSizes, FontWeights} from '../../theme/DesignTokens'

const MainContainer = styled.div `
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
`

const UperContainer = styled.div`
    background-color: ${Colors.SECONDARY};
    height: 60%;
    width: 100%;
`

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 20%;
    width: 100%;
    margin-top: 10px;
`

const HeaderText = styled.h2`
    color: ${Colors.WHITE};
    cursor: pointer;
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`

const Title = styled.h1`
    color: ${Colors.WHITE};
    font-weight: ${FontWeights.EXTRABOLD};
    font-size: ${FontSizes.FIVE};
`

const CenterContainer = styled.div`
    display: flex;
    width: 100%;
    margin-top: 50px;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    
`
const ImageContainer = styled.div`
    /* margin: auto; */

`
const DescriptionContainer = styled.div`
    display: flex;
    width: 500px;
    /* margin-right: 450px;
    margin-top: 200px; */
`

const DescriptionText = styled.h2`
    color: ${Colors.DARKBLUE};
    font-size: 30px;
    font-weight: 600;

`

const BellowContainer = styled.h2`
    display: flex;
    background-color: ${Colors.MEDIUMBLUE};
    height: 40%;
    width: 100%;
    justify-content: center;
    align-items: center;
`


const HomeStyles = {
    MainContainer,
    UperContainer,
    HeaderContainer,
    HeaderText,
    TitleContainer,
    Title,
    CenterContainer,
    DescriptionContainer,
    ImageContainer,
    DescriptionText,
    BellowContainer
}


export default HomeStyles;
import styled from "styled-components";
import { Colors, FontSizes, FontWeights } from "../../theme/DesignTokens";

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const StorysContainer = styled.div`
  display: flex;
  height: 20%;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

const StoryItem = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  color: ${Colors.MEDIUMGRAY};
  align-items: center;
  font-weight: bold;
`;

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const ForumContainer = styled.div`
  display: flex;
  width: 30%;
  justify-content: center;
  align-items: center;
`;

const SectionTitle = styled.h1`
  color: ${Colors.PRIMARY};
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const ForumItemsContainer = styled.div`
    height: auto;
    width: auto;
`;

const PublicationContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    flex-direction: column;
`;
const HeaderPublication = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 100px;
    margin-top: 30px;
    color: ${Colors.DARKBLUE};
`;

const HeaderDescription = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 15px;
`;

const ImageContainer = styled.div`
    height: auto;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    flex-direction: column;
`;

const ImageReaction = styled.div`
    height: auto;
    width: auto;
    display: flex;
    margin-top: 15px;
`;

const PublicationDescription = styled.span`
    color: ${Colors.DARKBLUE};
    margin: 15px 0 0 60px;
`

const FeedStyles = {
  MainContainer,
  CenterContainer,
  FeedContainer,
  ForumContainer,
  StorysContainer,
  StoryItem,
  ForumItemsContainer,
  SectionTitle,
  PublicationContainer,
  HeaderPublication,
  ImageContainer,
  HeaderDescription,
  PublicationDescription,
  ImageReaction
};



export default FeedStyles;

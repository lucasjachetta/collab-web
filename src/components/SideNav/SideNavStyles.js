import styled from "styled-components";
import { Colors } from "../../theme/DesignTokens";

const SideNav = styled.div`
  display: flex;
  height: 100%;
  width: 20%;
  flex-direction: column;
`;

const TopContainer = styled.div`
  display: flex;
  height: 35%;
  width: 100%;
  background-color: ${Colors.PRIMARY};
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ProfilePhotoContainer = styled.div`
  height: 100px;
  width: 100px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NameContainer = styled.h2`
  color: ${Colors.DARKBLUE};
`;
const UsernameContainer = styled.h4`
  color: ${Colors.WHITE};
`;

const BottomContainer = styled.div`
  display: flex;
  height: 65%;
  width: 100%;
  background-color: ${Colors.LIGHTGRAY};
  flex-direction: column;
  justify-content: flex-start;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 100%;
  justify-content: space-between;
  align-items: left;
  margin: 60px;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: max-content;
  width: max-content;
`;

const SideNavStyles = {
  SideNav,
  TopContainer,
  BottomContainer,
  ProfilePhotoContainer,
  InfoContainer,
  UsernameContainer,
  NameContainer,
  ItemsContainer,
  ItemContainer,
};

export default SideNavStyles;

import Logo from "../Logo/Logo";
import ProfilePhoto from "../../assets/ProfilePhoto.svg";
import ConfigItem from "../../assets/SideNavItems/ConfigItem.svg";
import FeedItem from "../../assets/SideNavItems/FeedItem.svg";
import InfoItem from "../../assets/SideNavItems/InfoItem.svg";
import ProfileItem from "../../assets/SideNavItems/ProfileItem.svg";
import { Link } from "react-router-dom";
import s from "./SideNavStyles";

function SideNav() {
  return (
    <s.SideNav>
      <s.TopContainer>
        <Logo />

        <s.ProfilePhotoContainer>
          <img src={ProfilePhoto} />
        </s.ProfilePhotoContainer>

        <s.InfoContainer>
          <s.NameContainer>Rafaela Albuquerque</s.NameContainer>
          <s.UsernameContainer>@rafa_alb</s.UsernameContainer>
        </s.InfoContainer>
      </s.TopContainer>

      <s.BottomContainer>
        <s.ItemsContainer>
          <s.ItemContainer>
            <Link to="/feed">
              <img src={FeedItem} />
            </Link>
          </s.ItemContainer>

          <s.ItemContainer>
            <Link to="/profile">
              <img src={ProfileItem} />
            </Link>
          </s.ItemContainer>

          <s.ItemContainer>
            <Link to="/info">
              <img src={InfoItem} />
            </Link>
          </s.ItemContainer>

          <s.ItemContainer>
            <Link to="/config">
              <img src={ConfigItem} />
            </Link>
          </s.ItemContainer>
        </s.ItemsContainer>
      </s.BottomContainer>
    </s.SideNav>
  );
}

export default SideNav;

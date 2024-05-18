import Logo from "../../assets/Logo.svg";
import s from "./Logo1Styles";

function Logo1() {
  return (
    <s.MainContainer>
        <img src={Logo}/> 
        <s.LogoText>collab</s.LogoText>
    </s.MainContainer>
  );
}

export default Logo1;
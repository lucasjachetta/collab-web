import HomeImage from "../../assets/HomeImage.svg";
import Logo from "../../components/Logo/Logo";
import s from "./HomeStyles";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <s.MainContainer>
      <s.UperContainer>
        <s.HeaderContainer>
          <Logo/>
          <s.HeaderText>Baixar</s.HeaderText>
          <s.HeaderText>Sobre</s.HeaderText>
          <s.HeaderText>Suporte</s.HeaderText>
          
          <Link to="/login">
              <Button><h2>Entrar</h2></Button>
          </Link>
          
        </s.HeaderContainer>

        <s.TitleContainer>
          <s.Title>Juntos por um mundo melhor</s.Title>
        </s.TitleContainer>

        <s.CenterContainer>
          <s.ImageContainer>
            <img src={HomeImage} />
          </s.ImageContainer>

          <s.DescriptionContainer>
            <s.DescriptionText>
              Compartilhe suas ideias, participe de discussões e contribua com a
              comunidade para um mundo mais sustentável e justo para todos
            </s.DescriptionText>
          </s.DescriptionContainer>
        </s.CenterContainer>
      </s.UperContainer>

      <s.BellowContainer>
        <Link to="/register">
          <Button variant = 'secondary'><h2>Crie sua Conta</h2></Button>
        </Link>
      </s.BellowContainer>
    </s.MainContainer>
  );
}

export default Home;

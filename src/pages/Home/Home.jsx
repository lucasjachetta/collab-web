import HomeImage from "../../assets/HomeImage.svg";
import Logo1 from "../../components/Logo1/Logo1"
import s from "./HomeStyles";
function Home() {
  return (
    <s.MainContainer>
      <s.UperContainer>
        <s.HeaderContainer>
          <Logo1/>
          <s.HeaderText>Baixar</s.HeaderText>
          <s.HeaderText>Sobre</s.HeaderText>
          <s.HeaderText>Suporte</s.HeaderText>
          <s.HeaderText>Entre</s.HeaderText>
          <s.HeaderText>ou cadastre-se</s.HeaderText>
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

      <s.BellowContainer></s.BellowContainer>
    </s.MainContainer>
  );
}

export default Home;

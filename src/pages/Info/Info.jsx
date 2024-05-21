import SideNav from "../../components/SideNav/SideNav";
import s from "./InfoStyles";
import { Link } from "react-router-dom";

function Info() {
  return (
    <s.MainContainer>
      <SideNav />
      <s.InfoContainer>
        <Link to="/objectives" style={{ textDecoration: 'none' }}>
          <s.InfoItem>
            <h2>Os 17 Objetivos para o Desenvolvimento Sustentável</h2>
          </s.InfoItem>
        </Link>
        <Link to="/coming-soon" style={{ textDecoration: 'none' }}>
          <s.InfoItem>
            <h2>Pontos de doação de alimentos</h2>
          </s.InfoItem>
        </Link>

        <Link to="/coming-soon" style={{ textDecoration: 'none' }}>
          <s.InfoItem>
            <h2>Pontos de Coleta Seletiva</h2>
          </s.InfoItem>
        </Link>

        <Link to="/coming-soon" style={{ textDecoration: 'none' }}>
          <s.InfoItem>
            <h2>Perguntas Frequentes</h2>
          </s.InfoItem>
        </Link>
      </s.InfoContainer>
    </s.MainContainer>
  );
}

export default Info;

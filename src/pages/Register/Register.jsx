import Logo from "../../assets/Logo-register-page.svg"
import s from "./RegisterStyles";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { Link } from "react-router-dom";

function Register() {
  return (
    <s.MainContainer>
         <s.LeftContainer>
            <img src={Logo} />
         </s.LeftContainer>

         <s.RightContainer>
            <s.CenterContainer>
              <Input placeholder="Nome Completo"/>
              <Input placeholder="Nome de usuário"/>
              <Input placeholder="Email"/>
              <Input placeholder="Número de Celular"/>
              <Input placeholder="Senha"/>
              <Input placeholder="Confirmar Senha"/>
              <s.DescriptionContainer>
                Ao se cadastrar, você concorda com nossos Termos, Política de Privacidade e Política de Cookies.
              </s.DescriptionContainer>
              <Link to="/">
                <Button onClick={ () => alert("Cadastro realizado com sucesso")}><h3>Cadastrar</h3></Button>
              </Link>
            </s.CenterContainer>
         </s.RightContainer>
    </s.MainContainer>
  );
}

export default Register;

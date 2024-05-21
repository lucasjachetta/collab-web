import Logo from "../../assets/Logo-register-page.svg"
import s from "./LoginStyles";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { Link } from "react-router-dom";

function Login() {
  return (
    <s.MainContainer>
         <s.LeftContainer>
            <img src={Logo} />
         </s.LeftContainer>

         <s.RightContainer>
            <s.CenterContainer>
              <Input placeholder="Email"/>
              <Input placeholder="Senha"/>
              
              <Link to="/feed">
                  <Button><h3>Entrar</h3></Button>
              </Link>

              <Link to="/register">
                  <Button variant = 'secondary'><h4>Cadastre-se</h4></Button>
              </Link>

            </s.CenterContainer>
         </s.RightContainer>
    </s.MainContainer>
  );
}

export default Login;

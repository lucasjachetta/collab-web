import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo-register-page.svg";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import s from "./RegisterStyles";

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError('Senhas não coincidem');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setSuccess('Usuário registrado com sucesso');
        setError('');
        setTimeout(() => navigate('/login'), 2000); // Redireciona para a página de login após 2 segundos
      } else {
        const data = await response.json();
        setError(data.message);
        setSuccess('');
      }
    } catch (error) {
      console.error('Erro ao tentar registrar:', error);
      setError('Erro ao tentar registrar');
      setSuccess('');
    }
  };

  return (
    <s.MainContainer>
      <s.LeftContainer>
        <img src={Logo} alt="Logo" />
      </s.LeftContainer>

      <s.RightContainer>
        <s.CenterContainer>
          <Input 
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input 
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input 
            placeholder="Confirmar Senha"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}
          <Button onClick={handleRegister}><h3>Cadastrar</h3></Button>
          <Link to="/login">
            <Button variant="secondary"><h4>Voltar ao Login</h4></Button>
          </Link>
        </s.CenterContainer>
      </s.RightContainer>
    </s.MainContainer>
  );
}

export default Register;

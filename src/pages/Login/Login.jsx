import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../../assets/Logo-register-page.svg";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import s from "./LoginStyles";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Email e senha são obrigatórios');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        navigate('/feed');
      } else {
        setError('Credenciais inválidas');
      }
    } catch (error) {
      console.error('Erro ao tentar fazer login:', error);
      setError('Erro ao tentar fazer login');
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
          
          {error && <p style={{ color: 'red' }}>{error}</p>}
          
          <Button onClick={handleLogin}>
            <h3>Entrar</h3>
          </Button>
          <Link to="/register">
            <Button variant='secondary'>
              <h4>Cadastre-se</h4>
            </Button>
          </Link>
        </s.CenterContainer>
      </s.RightContainer>
    </s.MainContainer>
  );
}

export default Login;

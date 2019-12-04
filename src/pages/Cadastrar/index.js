yarn import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import api from "../../services/api";

export default function Cadastrar({ history }) {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    await api.post("/usuario", {
      email,
      nome,
      senha
    });

    history.push("/entrar");
  }

  return (
    <Container>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Cadastrar</h1>
          <label htmlFor="name">Nome</label>
          <input
            id="nome"
            type="text"
            required
            onChange={event => setNome(event.target.value)}
          />

          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            required
            onChange={event => setEmail(event.target.value)}
          />

          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            required
            placeholder="Utilize no máximo 10 caracteres"
            onChange={event => setSenha(event.target.value)}
            maxLength="8"
          />

          <button type="submit">Cadastrar</button>

          <Link className="link" to="/entrar">
            <p>Já tem uma conta?</p>
          </Link>
        </form>
      </div>
    </Container>
  );
}

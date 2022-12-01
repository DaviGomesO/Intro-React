import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import './style.css';

function Form() {
  const [nome, setNome] = useState('');
  const [qtd_estoque, setQtdEstoque] = useState(0);
  const [preco, setPreco] = useState(0);

  //preventDefault evita a perca dos dados passados por formuláio
  function enviarFormulario(e) {
    e.preventDefault();

    const dados = {
			criador: 'Seu Nome',
      nome, 
      qtd_estoque,
      preco
  };

    axios.post('https://5b8f-200-129-62-18.sa.ngrok.io/products', dados).then((response) => {
      console.log(response);
      
      if (response.status === 200) {
        alert('Produto criado');
      }
	  });
  }

  return (
    <form onSubmit={enviarFormulario}>
      <h1>Cadastro de produtos</h1>

      <div className="form-row">
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          name="nome"
          id="nome"
          onChange={(e) => setNome(e.target.value)}
          value={nome}
        />
      </div>
      <div className="form-row">
        <label htmlFor="qtd_estoque">Quantidade em estoque</label>
        <input
          type="number"
          name="qtd_estoque"
          id="qtd_estoque"
          onChange={(e) => setQtdEstoque(e.target.value)}
          value={qtd_estoque}
        />
      </div>
      <div className="form-row">
        <label htmlFor="preco">Preço</label>
        <input
          type="text"
          name="preco"
          id="preco"
          onChange={(e) => setPreco(e.target.value)}
          value={preco}
        />
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
}

export default Form;

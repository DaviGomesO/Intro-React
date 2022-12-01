import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Hello from './Hello';
import Counter from './Counter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />

    <Hello name="Davi">
      {' '}
      Seja bem-vindo(a) a disciplina de Desenvolvimento Web!{' '}
    </Hello>

    <Counter />
  </React.StrictMode>
);

import React from 'react';
import './App.css';
import Form from './Form';

function App(props) {
  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">{props.name}</h1>
      </header>
      <main className="content">
        <Form />
      </main>
      <footer className="footer">
        <p className="footer__text">Все права защищены, сделано в {props.company}. 2020.</p>
      </footer>
    </div>
  );
}

export default App;
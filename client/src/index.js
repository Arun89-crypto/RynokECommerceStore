import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const Main = () => {
  return (
    <App />
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
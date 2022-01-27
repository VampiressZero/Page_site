import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let data = [
  { section: "Новости", link: "/", chapter: null },
  { section: "О нас", link: "/about/", chapter: [{ name: "Правоустанавливающие документы", link: "docs/" }, { name: "Общие сведения", link: "general/" }, { name: "Реквизиты УК", link: "props/" }] },
  { section: "Жителям", link: "/citizen/", chapter: [{ name: "Правовая база", link: "base/" }, { name: "Образцы заявлений", link: "example/" }, { name: "Паспортный стол", link: "passport/" }, { name: "Оплата услуг ЖКХ", link: "pay/" }, { name: "Отчет о проделанной работе", link: "reports" }] }
  ];
ReactDOM.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

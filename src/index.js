import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className='header'>
      <h1>Feast React Pizza Go.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  return (
    <main className='menu'>
      <h2>Our menu</h2>
      {pizzas.length > 0 && (
        <ul className='pizzas'>
          {pizzaData.map((pizza) => {
            return <Pizza key={pizza.name} pizza={pizza} />;
          })}
        </ul>
      )}
    </main>
  );
}

function Pizza({ pizza }) {
  const { name, ingredients, photoName, price, soldOut } = pizza;
  if (soldOut) return
  return (
    <li className='pizza'>
      <img src={photoName} alt={name} />
      <div>
        <h1>{name}</h1>
        <p>{ingredients}</p>
        <span>{convertPriceFormat('pt-BR', 'BRL', price)}</span>
      </div>
    </li>
  );
}

function Footer() {
  const workingHours = {
    currentHour: new Date().getHours(),
    openHour: 21,
    closeHour: 22,
    openMessage() {
      return `We're currently open until ${this.closeHour}:00. Come visit us or order online`;
    },
    closeMessage() {
      return "Sorry we're closed";
    },
    isOpen() {
      return (
        this.currentHour >= this.openHour && this.currentHour <= this.closeHour
      );
    },
    checkOpeningStatus() {
      return this.isOpen() ? this.openMessage() : this.closeMessage();
    },
  };
  return (
    <footer className='footer'>
      {workingHours.isOpen() && <Order status={workingHours.checkOpeningStatus()} />}

      {!workingHours.isOpen() && (
        <div className='order'>
          <p>{new Date().toLocaleTimeString()}. {workingHours.checkOpeningStatus()}</p>
          <button className='btn'>Order</button>
        </div>
      )}
    </footer>
  );
  // return React.createElement('footer', null, "We're currently open!");
}

function Order({ status }) {
  return (
    <div className='order'>
    {new Date().toLocaleTimeString()}. { status }
  </div>
  );
}

function convertPriceFormat(local, currency, value) {
  return new Intl.NumberFormat(local, { style: 'currency', currency }).format(
    value
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

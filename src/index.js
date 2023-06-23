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
  return (
    <main className='menu'>
      <h2>Our menu</h2>
      <Pizza
        name='Pizzaa Spinaci'
        ingredients='Tomato, mozarella, and pepperoni'
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
    </main>
  );
}

function Pizza(props) {
  const { name, ingredients, photoName, price } = props;
  return (
    <div className='pizza'>
      <img src={ photoName } alt={ name } />
      <div>
        <h1>{ name }</h1>
        <p>{ ingredients }</p>
        <span>{ price }</span>
      </div>
    </div>
  );
}

function Footer() {
  const workingHours = {
    currentHour: new Date().getHours(),
    openHour: 12,
    closeHour: 22,
    closeMessage: "We're currently open!",
    openMessage: "Sorry we're closed",
    checkOpeningStatus() {
      const status =
        this.openHour >= this.currentHour && this.openHour <= this.currentHour
          ? this.openMessage
          : this.closeMessage;
      return status;
    },
  };
  return (
    <footer className='footer'>
      {new Date().toLocaleTimeString()}. {workingHours.checkOpeningStatus()}
    </footer>
  );
  // return React.createElement('footer', null, "We're currently open!");
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

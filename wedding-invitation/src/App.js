import React, { useState } from 'react';
//components
import Home from './components/Home';
import RSVPForm from './components/RSVPForm';
import WishesForm from './components/WishesForm';
import WishesList from './components/WishesList';
import Content from './components/Content';
import Carousel from './components/Carousel';
import DateTime from './components/DateTime';
import Address from './components/Address';
import Footer from './components/Footer';
//style


function App() {
  const [wishes, setWishes] = useState([]);

  const addWish = (wish) => {
    setWishes([...wishes, wish]);
  };

  return (
    <div className="App">
      <Home />
      <Content/>
      <Carousel/>
      <DateTime/>
      <Address/>
      <WishesList wishes={wishes} />
      <WishesForm onAddWish={addWish} />
      <RSVPForm />
      <Footer/>
    </div>
  );
}

export default App;

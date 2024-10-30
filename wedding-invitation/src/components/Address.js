import React, { useEffect, useState } from 'react';
import '../styles/Address.css';
import img5 from '../assets/images/img5.jpg'; // Resim dosyasını import ediyoruz

const Address = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const handleShowLocation = () => {
    window.open(`https://2gis.kg/bishkek/firm/70000001019362616`, '_blank');
  };

  useEffect(() => {
    const targetDate = new Date('2024-11-20T00:00:00'); // 20 Kasım 2024
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="address-container">
        <h2>Дарегибиз:</h2>
        <p className="restaurant-name">"Вавилон" рестораны</p>
        <p className="city">Бишкек шаары, Ленин району</p>
        <p className="full-address">Жибек-Жолу проспекти, 402</p>
        <button className="location-button" onClick={handleShowLocation}>
          2GIS
        </button>
      </div>
      
      <div className="owner-container">
        <h2>Той ээлери:</h2>
        <p className="name">Гульмира & Тиленбай</p>
        <img src={img5} alt="Owners" className="owner-image" />
      </div>

      <div className="counter-container">
        <h2>Калган убакыт:</h2>
        <div className="countdown">
          <div className="circle">
            <div className="number">{timeRemaining.days}</div>
            <div className="label">Күн</div>
          </div>
          <span className="separator">:</span> {/* Arada iki nokta */}
          <div className="circle">
            <div className="number">{timeRemaining.hours}</div>
            <div className="label">Саат</div>
          </div>
          <span className="separator">:</span> {/* Arada iki nokta */}
          <div className="circle">
            <div className="number">{timeRemaining.minutes}</div>
            <div className="label">Мүнөт</div>
          </div>
          <span className="separator">:</span> {/* Arada iki nokta */}
          <div className="circle">
            <div className="number">{timeRemaining.seconds}</div>
            <div className="label">Секунд</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;

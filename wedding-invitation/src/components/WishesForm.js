import React, { useState } from 'react';
import { db, serverTimestamp } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import '../styles/WishesForm.css';

const WishesForm = () => {
  const [wish, setWish] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'wishes'), {
        wish,
        name,
        timestamp: serverTimestamp(),
      });
      alert('Dilek kaydedildi!');
      setWish('');
      setName('');
    } catch (error) {
      console.error("Dilek kaydedilemedi: ", error);
    }
  };

  return (
    <div className="wishes-form">
      <h2>Dileklerinizi Bırakın</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="İsim"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Dileğinizi yazın..."
          value={wish}
          onChange={(e) => setWish(e.target.value)}
          required
        />
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default WishesForm;

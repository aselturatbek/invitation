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
      alert('Каалооңуз сакталды!');
      setWish('');
      setName('');
    } catch (error) {
      console.error("Каалооңуз сакталбады: ", error);
    }
  };

  return (
    <div className="wishes-form">
      <h2>Каалоонузду калтырыныз</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Атыңыз"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Каалооңузду жазыңыз..."
          value={wish}
          onChange={(e) => setWish(e.target.value)}
          required
        />
        <button type="submit">Жөнөтүү</button>
      </form>
    </div>
  );
};

export default WishesForm;

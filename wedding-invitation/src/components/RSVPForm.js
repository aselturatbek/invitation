import React, { useState } from 'react';
import { db, serverTimestamp } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import '../styles/RSVPForm.css';

const RSVPForm = () => {
  const [name, setName] = useState('');
  const [isAttending, setIsAttending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'rsvp'), {
        name,
        isAttending,
        timestamp: serverTimestamp(),
      });
      alert('RSVP kaydedildi!');
      setName('');
      setIsAttending(false);
    } catch (error) {
      console.error("RSVP kaydedilemedi: ", error);
    }
  };

  return (
    <div className="rsvp-form">
      <h2>Katılımınızı Bildirin</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="İsim"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>
          <input
            type="checkbox"
            checked={isAttending}
            onChange={() => setIsAttending(!isAttending)}
          />
          Katılacağım
        </label>
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default RSVPForm;

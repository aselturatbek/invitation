import React, { useState } from 'react';
import { db, serverTimestamp } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import '../styles/RSVPForm.css';

const RSVPForm = () => {
  const [name, setName] = useState('');
  const [attendanceOption, setAttendanceOption] = useState(''); // Katılım seçeneği

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'rsvp'), {
        name,
        attendanceOption,
        timestamp: serverTimestamp(),
      });
      
      setName('');
      setAttendanceOption('');
    } catch (error) {
      console.error("RSVP катталбады: ", error);
    }
  };

  return (
    <div className="rsvp-form">
      <h2>Тойго катышарыңызды билдирүүңүздү суранабыз!</h2>
      <p className="instructions">Атыңызды жана, жубуңуз менен келсеңиз, экөөңүздүн тең аттарыңызды кошуп жазыңыз</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Атыңыз"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <div className="options">
          <label>
            <input
              type="radio"
              name="attendance"
              value="Келемин"
              checked={attendanceOption === 'Келемин'}
              onChange={(e) => setAttendanceOption(e.target.value)}
            />
            Келемин
          </label>
          <label>
            <input
              type="radio"
              name="attendance"
              value="Жубум менен келемин"
              checked={attendanceOption === 'Жубум менен келемин'}
              onChange={(e) => setAttendanceOption(e.target.value)}
            />
            Жубум менен келемин
          </label>
          <label>
            <input
              type="radio"
              name="attendance"
              value="Өкүнүчкө жараша, катыша албайм"
              checked={attendanceOption === 'Өкүнүчкө жараша, катыша албайм'}
              onChange={(e) => setAttendanceOption(e.target.value)}
            />
            Өкүнүчкө жараша, катыша албайм
          </label>
        </div>
        <button type="submit">Жиберүү</button>
      </form>
    </div>
  );
};

export default RSVPForm;

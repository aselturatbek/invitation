import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import '../styles/WishesList.css';

const WishesList = () => {
  const [wishes, setWishes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const wishesCollection = await db.collection('wishes').orderBy('timestamp', 'desc').get();
      setWishes(
        wishesCollection.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    };
    fetchData();
  }, []);

  return (
    <div className="wishes-list">
      <h2>Dilekler</h2>
      <ul>
        {wishes.map((wish) => (
          <li key={wish.id}>
            <strong>{wish.name}</strong>: {wish.wish}
            <br />
            <small>{wish.timestamp?.toDate().toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WishesList;

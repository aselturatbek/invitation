import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import '../styles/WishesList.css';

const WishesList = () => {
  const [wishes, setWishes] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'wishes'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const wishesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setWishes(wishesData);
    });
    return () => unsubscribe();
  }, []);

  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  return (
    <div className="wishes-list">
      <h2>Каалоолор</h2>
      <div className="wishes-container">
        {wishes.map((wish) => (
          <div key={wish.id} className="wish-item">
            <p className="wish-info">
              <span className="wish-name">{wish.name}</span><br/>
              <span className="wish-date">{formatDate(wish.timestamp)}</span>
            </p>
            <p className="wish-text">{wish.wish}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishesList;

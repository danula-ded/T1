import React, { useState } from 'react';
import axios from 'axios';
import styles from './GetCode.module.css';

const GetCode = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');

  const handleGetCode = () => {
    axios.get(`http://193.19.100.32:7000/api/get-code?email=${email}`)
      .then(response => {
        setCode(response.data.code);
      })
      .catch(error => {
        console.error("Ошибка при получении кода!", error);
      });
  };

  return (
    <div className={styles.getCode}>
      <h2>Получить код</h2>
      <input
        type="email"
        placeholder="Введите ваш email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleGetCode}>Получить код</button>
      {code && (
        <div>
          <p>Email: {email}</p>
          <p>Код: {code.replace(/./g, '*')}</p>
        </div>
      )}
    </div>
  );
};

export default GetCode;

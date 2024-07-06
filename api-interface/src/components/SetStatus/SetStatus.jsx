import React, { useState } from 'react';
import axios from 'axios';
import styles from './SetStatus.module.css';

const encodeToBase64 = (email, code) => {
  const str = `${email}:${code}`;
  return btoa(str);
};

const SetStatus = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [token, setToken] = useState('');
  const [response, setResponse] = useState('');

  const handleSetStatus = () => {
    const token = encodeToBase64(email, code);
    setToken(token);

    const data = {
      token: token,
      status: 'increased',
    };

    axios.post('http://193.19.100.32:7000/api/set-status', data)
      .then(response => {
        setResponse(response.data);
      })
      .catch(error => {
        console.error("Ошибка при установке статуса!", error);
      });
  };

  return (
    <div className={styles.setStatus}>
      <h2>Установить статус</h2>
      <input
        type="email"
        placeholder="Введите ваш email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Введите ваш код"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={handleSetStatus}>Установить статус</button>
      {token && (
        <div>
          <p>Email: {email}</p>
          <p>Токен: {token.replace(/.(?=.{4})/g, '*')}</p>
        </div>
      )}
      {response && (
        <div>
          <p>Ответ: {response}</p>
        </div>
      )}
    </div>
  );
};

export default SetStatus;

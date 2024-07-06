import React, { useState } from 'react';
import styles from './Base64Encoder.module.css';

const encodeToBase64 = (email, code) => {
  const str = `${email}:${code}`;
  return btoa(str);
};

const Base64Encoder = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [token, setToken] = useState('');

  const handleEncode = () => {
    const encodedToken = encodeToBase64(email, code);
    setToken(encodedToken);
  };

  return (
    <div className={styles.base64Encoder}>
      <h2>Кодировщик Base64</h2>
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
      <button onClick={handleEncode}>Кодировать</button>
      {token && (
        <div>
          <p>Email&Code:  {email}:{code}</p>
          <p>Токен:  {token}</p>
        </div>
      )}
    </div>
  );
};

export default Base64Encoder;

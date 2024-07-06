import React, { useState } from 'react';

// Функция для кодирования строки в BASE64
const encodeToBase64 = (email, code) => {
  const str = `${email}:${code}`;
  return btoa(str);  // btoa используется для кодирования строки в BASE64
};

// Компонент для кодирования строки в BASE64
const Base64Encoder = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [token, setToken] = useState('');

  const handleEncode = () => {
    const encodedToken = encodeToBase64(email, code);
    setToken(encodedToken);
  };

  return (
    <div>
      <h2>Base64 Encoder</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={handleEncode}>Encode</button>
      {token && (
        <div>
          <p>Email: {email}</p>
          <p>Token: {token}</p>
        </div>
      )}
    </div>
  );
};

export default Base64Encoder;

// Функция для кодирования строки в BASE64
function encodeToBase64(email, code) {
    const str = `${email}:${code}`;
    const base64Encoded = Buffer.from(str).toString('base64');
    return base64Encoded;
  }
  
  // Пример использования функции
  const email = 'stupishin1597@yandex.ru';
  const code = '4ed52f019efd706261d8b07f14f45639';
  const token = encodeToBase64(email, code);
  
  console.log('Закодированный токен:', token);
  
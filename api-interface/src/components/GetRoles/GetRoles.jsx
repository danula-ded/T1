import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './GetRoles.module.css';

const GetRoles = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios.get('http://193.19.100.32:7000/api/get-roles')
      .then(response => {
        setRoles(response.data.roles);
      })
      .catch(error => {
        console.error("Ошибка при получении ролей!", error);
      });
  }, []);

  return (
    <div className={styles.getRoles}>
      <h2>Роли</h2>
      <ul>
        {roles.map(role => (
          <li key={role}>{role}</li>
        ))}
      </ul>
    </div>
  );
};

export default GetRoles;

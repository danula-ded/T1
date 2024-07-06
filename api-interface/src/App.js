import React from 'react';
import GetRoles from './components/GetRoles/GetRoles';
import GetCode from './components/GetCode/GetCode';
import SetStatus from './components/SetStatus/SetStatus';
import Base64Encoder from './components/Base64Encoder/Base64Encoder';
import styles from './App.css';

const App = () => {
  return (
    <div className={styles.app}>
      <h1>Интеграция с API</h1>
      <div className={styles.components}>
        <GetRoles />
        <GetCode />
        <SetStatus />
        <Base64Encoder />
      </div>
    </div>
  );
};

export default App;

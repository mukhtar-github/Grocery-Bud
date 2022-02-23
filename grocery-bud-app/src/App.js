import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
  let list = localStorage.getItem('lsit');
  
  if (list) {
    return (list = JSON.parse(localStorage.getItem('lsit')));
  } else {
    return [];
  }
};

function App() {
  return <h2>grocery bud setup</h2>
}

export default App

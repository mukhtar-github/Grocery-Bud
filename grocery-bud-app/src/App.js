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
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      showAlert(true, 'danger', 'please enter value');
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value change');
    }
  };



  return <h2>grocery bud setup</h2>
}

export default App

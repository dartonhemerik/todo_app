import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // (after adding Firebase) when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    // this code here... fires when the App.js loads
    db.collection('todos')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);
  // useEffect(function, dependancies);

  const addTodo = (e) => {
    // this will fire off when we click the button
    e.preventDefault(); // this will prevent refresh when submitting

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // setTodos([...todos, input]);
    setInput('');
  };

  return (
    <div className='App'>
      <h1>Todo App</h1>
      <form>
        {/* <input value={input} onChange={(e) => setInput(e.target.value)} /> */}
        <FormControl>
          <InputLabel>Write A Todo</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>
        <Button
          type='submit'
          onClick={addTodo}
          disabled={!input}
          variant='contained'
          color='primary'
        >
          Add Todo
        </Button>
        {/* <button type='submit' onClick={addTodo}>
          Add Todo
        </button> */}
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

import React from 'react';
import Todo from './Todo';
import './App.css';

function App() {
  const item = { id: 0, title: "책 읽기", done: true };

  return (
    <div className="App">
      <Todo item={item}/> 
    </div>
  );
}

export default App;
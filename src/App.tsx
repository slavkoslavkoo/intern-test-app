import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ItemsList from './Pages/ItemsList';
import './App.scss';

function App() {
  return (
    <main className={'container'}>
      <Routes>
        <Route path='/' element={<ItemsList />} />
      </Routes>
    </main>
  );
}

export default App;

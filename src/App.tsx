import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import ItemsList from './Pages/ItemsList';
import './App.scss';
import ItemPopup from './Components/Items/ItemPopup';

const App: FC = () => {
  return (
    <main className={'container'}>
      <Routes>
        <Route path='/' element={<ItemsList />}>
          <Route path='item/:id' element={<ItemPopup />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;

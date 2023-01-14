import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import ItemsList from './Pages/ItemsList';
import './App.scss';
import Error from './Components/Error/Error';

const App: FC = (): JSX.Element => {
  return (
    <main className={'container'}>
      <Routes>
        <Route
          path='/'
          element={<ItemsList />}
          errorElement={<Error message={'Something went wrong!'} />}
        />
      </Routes>
    </main>
  );
};

export default App;

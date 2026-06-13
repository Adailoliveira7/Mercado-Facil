import { useState } from 'react';
import { CarProvider } from './context/carcontext';
import Home from './pages/Home';
import BottomNav from './components/BottomNav';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Inicio');

  return (
    <CarProvider>
      <div className="App">
        {currentPage === 'Inicio' && <Home />}
        {/* Adicione outras páginas aqui conforme criar */}
        <BottomNav setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </div>
    </CarProvider>
  );
}

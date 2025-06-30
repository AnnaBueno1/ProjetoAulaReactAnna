import './App.css';
import Sobre from './Componentes/Sobre';
import Produto from './Componentes/Produtos';
import Home from './Componentes/Home';
import Contato from './Componentes/Contato';
import CalcularDesconto from './Componentes/CalcularDesconto';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Header from './Componentes/Header';

function App() {
  

  return (
    <BrowserRouter>
      <Header />

      <main>
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/produtos" element={<Produto />} />
            <Route path='/listarProduto' element={<ListarProduto />}/>
            <Route path='/contato' element={<Contato />} />
          </Routes>

          <h1>Projetos</h1>
          <h2></h2>
          
        </section>
      </main>

      

    </BrowserRouter>
  );
}

export default App;


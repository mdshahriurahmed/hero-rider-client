import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>

    </div>
  );
}

export default App;

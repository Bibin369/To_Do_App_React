import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import Header from './components/Header';
import Delete from './components/Delete';
import Search from './components/Search';
import View from './components/View';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Add/>}/>
      <Route path='header' element={<Header/>}/>
      <Route path='delete' element={<Delete/>}/>
      <Route path='search' element={<Search/>}/>
      <Route path='view' element={<View/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HEADER from '../src/components/header/Header'
import HOME from './page/home/HOME'
import MOVIELIST from "../src/components/movieslist/MOVIESLIST"
import Movie from './page/movie/MOVIE';
function App() {
  return (
    <div className="App">
      <Router>
        <HEADER />

        <Routes>
          <Route index element={<HOME/>} ></Route>
          <Route path='movie/:id' element={<Movie/>} ></Route>
          <Route path='movies/:type' element={<MOVIELIST/>} ></Route>
          <Route path='/*' element={<h1>404 PAGE NOT FOUND</h1>} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddMoviePage from './pages/AddMoviePage';
import EditMoviePage from './pages/EditMoviePage';
import { useState } from 'react';

function App() {

  const [movieToEdit, setMovieToEdit] = useState();

  return (
    <div className="App">
      <Router>
        <div className="App-header">
		<Routes>
          <Route path="/" element={<HomePage movieToEdit={movieToEdit} setMovieToEdit={setMovieToEdit} />}/>
          <Route path="/add-movie" element={<AddMoviePage />}/>
          <Route path="/edit-movie" element={ <EditMoviePage movieToEdit={movieToEdit} setMovieToEdit={setMovieToEdit} />}/>
		  </Routes>
          </div>
      </Router>
    </div>
  );
}

export default App;
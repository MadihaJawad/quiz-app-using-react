import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppRouter from './config/router/route';
import Quiz from './pages/Quiz';

function App() {
  return (
   <AppRouter />
  );
}

export default App;
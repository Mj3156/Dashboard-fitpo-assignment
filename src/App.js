import './App.css';
import React from 'react'
import Sidebar from './components/Sidebar';
import MainContainer from './components/MainContainer';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainContainer />
    </div>
  );
}

export default App;

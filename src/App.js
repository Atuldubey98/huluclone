import React, { useState } from 'react';
import Header from './Header';
import Nav from "./Nav";
import './App.css';
import Results from './Results';
import requests from "./requests"
function App() {
 const [selectedOption , setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="App">
    <Header/>
    <Nav setselectedOption = {setSelectedOption} />
    <Results selectedOption={selectedOption} />
    </div>
    
  );
}

export default App;

import React from 'react';
import './App.css';
import Navbar from './componentes/navbar/Navbar'
import { Switch, Route } from 'react-router-dom';
import Home from './componentes/home/Home';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      {/* <Footer /> */}
    </>
  );
}

export default App;

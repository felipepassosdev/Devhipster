import React from 'react';
import './App.css';
import Navbar from './componentes/navbar/Navbar'
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Javascript from './pages/JavaScript';
import GlobalStyle from './styles/global'


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/javascript" exact component={Javascript} />
      </Switch>
      <GlobalStyle/>
      {/* <Footer /> */}
    </>
  );
}

export default App;

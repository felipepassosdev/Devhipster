import React from 'react';
import './App.css';
import NavigationBar from './componentes/navbar'
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Javascript from './pages/JavaScript';
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <>
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/javascript" exact component={Javascript} />
      </Switch>
      <createGlobalStyle/>
      {/* <Footer /> */}
    </>
  );
}

export default App;

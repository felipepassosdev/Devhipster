import React from 'react';
import NavigationBar from './components/navbar'
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Javascript from './pages/JavaScript';
import GlobalStyle from './styles/global';
import Vagas from './pages/Vagas';

function App() {
  return (
    <>
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/javascript" component={Javascript} />
        <Route path="/vagas" component={Vagas} />
      </Switch>
      <GlobalStyle/>
    </>
  );
}

export default App;

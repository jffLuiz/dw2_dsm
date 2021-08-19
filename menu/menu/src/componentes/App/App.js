import React from 'react'
import './App.css';
import Header from '../Header/Header'
import {Router,Switch} from 'react-router'
import Inicio from '../Inicio/Inicio'

function App() {
  return (
    <div>
      <Header />    
      <main>
      <Switch>
          <Route exact path = "/" render = {(props) => <Inicio/>} />
        </Switch>
      </main>
    </div>
  );
}

export default App;

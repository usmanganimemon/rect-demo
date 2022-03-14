import React from 'react';
import Container from 'react-bootstrap/Container'
import Home from './components/Home'

import './assets/scss/App.scss';

const App = () => {
  return (
    <div className="App">
      <Container>
      <Home />
      </Container>
    </div>
  );
}

export default App;

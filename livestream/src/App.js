import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import store from './store';
import Livestream from './components/Livestream';
import Chat from './components/Chat';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Livestream />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

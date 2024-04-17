import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './component/Login';
import Home from './component/Home';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import reducer from './Config/reducer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const store = legacy_createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/auth" element={<Login />} /> {/* Updated usage */}
        <Route path="/" element={<Home />} /> {/* Updated usage */}
        <Route path="/Home" element={<Home />} /> {/* Updated usage */}
      </Routes>
    </Router>
  </Provider>
);


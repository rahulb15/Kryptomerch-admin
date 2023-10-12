import axios from 'axios'
import './App.scss';
import Layout from './layout/layout';
import React from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// axios.defaults.baseURL = '/api/';
axios.defaults.baseURL = process.env.REACT_APP_NODE_URL;

function App() {
  return (
    <div>
      <Layout />
      <ToastContainer />
    </div>
  );
}

export default App;

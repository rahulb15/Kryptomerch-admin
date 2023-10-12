import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css"
import './index.scss';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './store'
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import TitleContextProvider from './contexts/headerContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor = persistStore(store);
root.render(

  <React.StrictMode>
    <TitleContextProvider>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </TitleContextProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reducer,{intialState} from './reducer.js';
import { StateProvider } from './StateProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider intialState={intialState} reducer = {reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
)


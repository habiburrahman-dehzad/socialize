import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import Root from './Root';
import App from './components/App';

ReactDOM.render(
  <Root initialState={{}}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Root>,
  document.getElementById('root')
);

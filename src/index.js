import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'bulma/css/bulma.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

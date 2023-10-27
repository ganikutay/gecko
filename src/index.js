import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'


ReactDOM.render( <
    React.StrictMode >
    <
    App / >
    <
    /React.StrictMode>,
    document.getElementById('root')
);

//terminali asagidan cekerek yukari kaldir.
// terminali ikiye bol ve sagtarafta
// Oncelikle cd src, cd api yaz
//npx json-server --watch coins.json --port 3002
//bunlari yaptiktan sonra sol tarafta cd src yaz
//ardindan npm start yaz
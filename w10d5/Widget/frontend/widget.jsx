import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../root.jsx'

document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById('main');

    
    ReactDOM.render(<Root/>, main);

})
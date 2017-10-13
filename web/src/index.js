import React from 'react';
import ReactDOM from 'react-dom';

import HeaderBar from "./components/header_bar"

const App = () => {
  return (
      <div>
        <HeaderBar/>
      </div>
  );
};

ReactDOM.render(<App/>, document.querySelector('#body'));
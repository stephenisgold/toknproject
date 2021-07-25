import React from 'react'
// TODO: install prop-types
import './App.css'

import { Switch, Route, Link } from "react-router-dom"

const App = () => {
  return (
    <div className="App">
      Tokn Project
      <Switch>
        {/* <Route path="/" component={ Home } /> */}
        {/* <Route path="*" component={ Home } /> */}
      </Switch>
    </div>
  );
}

export default App;

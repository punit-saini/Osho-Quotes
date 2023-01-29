import './index.css'
import Main from './Components/Main'
import Quotes from './Quotes'
import React from 'react'
import Themes from './Themes'
import { ReactDOM } from 'react'
function App() {
  return (
    <div className="App h-max mx-auto">
          <Main color={'red'} quotes={Quotes} themes={Themes} />
    </div>

  );
}

export default App;

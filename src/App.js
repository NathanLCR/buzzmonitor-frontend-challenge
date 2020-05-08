import React, { useState } from 'react';
import Board from './components/Board';

import languages from './utils/languages';
import DropdownLanguageMenu from './DropdownLanguageMenu';

function App() {
  const [language, setLanguage] = useState(languages[0]);
  // Here is the global state with all the texts, in different languages.
  return (
    <div className="App">
      <DropdownLanguageMenu
        setLanguage={setLanguage}
        language={language}
      ></DropdownLanguageMenu>
      <Board language={language}></Board>
    </div>
  );
}

export default App;

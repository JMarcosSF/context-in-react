import React, { useState } from 'react'
import UserCreate from "./UserCreate";

const LANGS = {
  ENGLISH: 'english',
  JAPANESE: 'japanese',
}
const App = () => {
  const [language, setLanguage] = useState('english');
  const onLanguageChange =(lang) => {
    console.log(`Changed lang to ${lang}`);
    setLanguage(lang);
  }

  return (
      <div className="ui container">
        <div>
          Select a language:
          <i className="flag us" onClick={() => {onLanguageChange(LANGS.ENGLISH)}}/>
          <i className="flag jp" onClick={() => {onLanguageChange(LANGS.JAPANESE)}}/>
        </div>
        <UserCreate />
      </div>

  );
}

export default App;

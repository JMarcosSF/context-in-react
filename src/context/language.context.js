import React, { createContext } from 'react';

const LANGS = {
  ENGLISH: 'english',
  JAPANESE: 'japanese',
}

const LanguageContext = createContext({
  language: LANGS.ENGLISH,
});

export default LanguageContext;

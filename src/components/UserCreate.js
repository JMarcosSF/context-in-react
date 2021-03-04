import React, {useContext} from 'react';
import Field from "./Field";
import Button from "./Button";
import LanguageContext from "../context/language.context";

const UserCreate = () => {
  const languageContext = useContext(LanguageContext);
  return (
    <div className="ui form">
      <h1>{languageContext.language}</h1>
      <Field />
      <Button />
    </div>
  )
}
export default UserCreate;

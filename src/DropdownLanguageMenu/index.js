import React, { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';

import { Container, Item, MenuTitle, Menu } from './styles';

import languages from '../utils/languages';

function DropdownLanguageMenu({ language, setLanguage }) {
  const [showMenu, setShowMenu] = useState(false);

  function showMenuFunc() {
    setShowMenu(!showMenu);
  }
  function changueLanguage(languageIndex) {
    /*
      Here just change the positions of the array of languages, 
      position 1 is english,
      position 2 is brazilian portugues,
      and position 3 is es
    */
    setLanguage(languages[languageIndex]);
  }
  return (
    <Container>
      <MenuTitle onClick={showMenuFunc}>
        <ReactCountryFlag
          countryCode={language.countryCode}
          svg
          style={{
            width: '2em',
            height: '2em',
          }}
        />
        {language.currentLanguage}
      </MenuTitle>
      {showMenu && (
        <Menu className="dd-list">
          {language.otherLanguages.map((lang) => (
            <Item onClick={() => changueLanguage(lang.indexCode)}>
              <ReactCountryFlag
                countryCode={lang.countryCode}
                svg
                style={{
                  width: '2em',
                  height: '2em',
                }}
              />
              {lang.name}
            </Item>
          ))}
        </Menu>
      )}
    </Container>
  );
}

export default DropdownLanguageMenu;

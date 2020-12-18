import React, { useContext } from 'react';
import { LanguageContext } from "../../context/LanguageContext";
import { NavLink } from 'react-router-dom';
import headerImage from '../../assets/wall-with-plants.jpg';
import { ReactComponent as FlagNL } from '../../assets/netherlands.svg';
import './Header.css';

const content = {
  nl: {
    menuItems: {
      aboutUs: 'Over ons',
      allPlants: 'Alle planten',
      experience: 'Persoonlijke ervaringen'
    },
    changeTo: 'Cambiar el idioma a',
    title: 'Planten voor iedereen!'
  },
  es: {
    menuItems: {
      aboutUs: 'Sobre nosotros',
      allPlants: 'todas las plantas',
      experience: 'Experiencias personales'
    },
    changeTo: 'Wissel taal naar',
    title: 'Plantas para todos!'
  }
}

function Header() {

  const { currentLanguage } = useContext(LanguageContext);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/about-us">
                {content[currentLanguage].menuItems.aboutUs}
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/all-plants">
                {content[currentLanguage].menuItems.allPlants}
              </NavLink>
              </li>
            <li className="language-switch">
              <p>{content[currentLanguage].changeTo}</p>
              <FlagNL />
            </li>
          </ul>
        </nav>
        <div className="image-container">
          <img src={headerImage} alt="Header image plants" className="header-image" />
          <h1>{content[currentLanguage].title}</h1>
        </div>

      </header>
    </>
  );
}

export default Header;

"use client";
import { useState } from 'react';

export default function Dropdown() {
  const [isLanguageOptionVisible, setLanguageOptionVisible] = useState(false);

  const toggleLanguageOption = () => {
    setLanguageOptionVisible(!isLanguageOptionVisible);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="w-auto h-auto"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={toggleLanguageOption}
        >
          language
          <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {isLanguageOptionVisible && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
          <div className="py-1" role="none">
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">
              en
            </a>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">
              es
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

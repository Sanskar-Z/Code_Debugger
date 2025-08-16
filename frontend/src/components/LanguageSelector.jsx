import React, { useContext, useEffect } from 'react';
import { counterContext, modeContext } from '../context/context';
import { LANGUAGE_VERSIONS } from '../constants';
import { languageVersions } from '../constants';

const LanguageSelector = () => {
  const [selectedValue, setSelectedValue] = useContext(counterContext);
  const [mode, setMode] = useContext(modeContext)

  const languages = Object.entries(languageVersions)

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="pt-6 pb-3">
      <label className={"block text-sm font-medium mb-2" + (mode ? " text-gray-700" : " text-gray-400")}>Choose a language:</label>
      <select
        id="language-select"
        value={selectedValue}
        onChange={handleSelectChange}
        className={"pl-3 pr-10 py-2 text-base block w-full rounded-md " + (mode ? " bg-gray-100 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200" : " bg-gray-700 border-gray-600 text-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md appearance-none")}
      >
        <option value="" disabled>
          -- Select an option --
        </option>
        {languages.map(([language, version]) => (
          <option key={language} value={language} className={
            language === selectedValue
              ? (mode ? "text-blue-500 bg-gray-200" : "text-indigo-400 bg-gray-800")
              : ""
          }>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;

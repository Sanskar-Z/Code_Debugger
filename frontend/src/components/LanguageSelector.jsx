import React, { useContext, useEffect } from 'react';
import { counterContext } from '../context/context';
import { LANGUAGE_VERSIONS } from '../constants';
import { languageVersions } from '../constants';

const LanguageSelector = () => {
  const [selectedValue, setSelectedValue] = useContext(counterContext);

  const languages = Object.entries(languageVersions)

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="p-6 rounded-lg shadow-sm">
      <label className="block text-sm font-medium text-gray-700 mb-2">Choose a language:</label>
      <select
        id="language-select"
        value={selectedValue}
        onChange={handleSelectChange}
        className="pl-3 pr-10 py-2 text-base bg-gray-100 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
      >
        <option value="" disabled> 
          -- Select an option --
        </option>
        {languages.map(([language, version]) => (
          <option key={language} value={language} className={language===selectedValue?"text-blue-500 bg-gray-200":""}>
            {language} 
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;

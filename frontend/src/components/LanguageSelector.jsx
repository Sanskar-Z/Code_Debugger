import React, { useContext, useEffect } from 'react';
import { counterContext } from '../context/context';
import { LANGUAGE_VERSIONS } from '../constants';


const LanguageSelector = () => {
  const [selectedValue, setSelectedValue] = useContext(counterContext);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="max-w-[60%] bg-gray-100 p-5 rounded-3xl">
      <label className="block text-sm font-medium text-gray-700 mb-2">Choose a language:</label>
      <select
        id="language-select"
        value={selectedValue}
        onChange={handleSelectChange}
        className="bg-white block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
      >
        <option value="" disabled>
          -- Select an option --
        </option>
        {LANGUAGE_VERSIONS.map((lang) => (
          <option key={lang} value={lang} className={lang===selectedValue?"text-blue-500 bg-gray-100":""}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;

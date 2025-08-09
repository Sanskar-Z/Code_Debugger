import React, { useContext } from 'react';
import { counterContext } from '../context/context';
import { LANGUAGE_VERSIONS } from '../constants';

const LanguageSelector = () => {
  const [selectedValue, setSelectedValue] = useContext(counterContext);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="w-[30%] max-w-sm">
      <label className="block text-sm font-medium text-gray-700 mb-2">Choose a language:</label>
      <select
        id="language-select"
        value={selectedValue}
        onChange={handleSelectChange}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
      >
        <option value="" disabled>
          -- Select an option --
        </option>
        {LANGUAGE_VERSIONS.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;

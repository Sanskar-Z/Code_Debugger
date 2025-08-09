import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const LanguageSelector = () => {
    // Define an array of options for the dropdown.
    // This is a good practice to keep your data separate from your JSX.
    const options = ['JavaScript', 'Python', 'C++', 'C', 'Java'];

    const [selectedValue, setSelectedValue] = useState('');

    // This function is the event handler for the dropdown's onChange event.
    // It updates the state with the new value selected by the user.
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (

            <div className="w-[70%] max-w-sm">
                <label  className="block text-sm font-medium text-gray-700 mb-2">Choose a language: </label>

                <select id="language-select" value={selectedValue} onChange={handleSelectChange} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200">
                    <option value="" disabled>
                        -- Select an option --
                    </option>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>

                {selectedValue && (
                    <p className="mt-4 text-center text-lg text-gray-800 font-semibold">
                        You selected: <span className="text-blue-600">{selectedValue}</span>
                    </p>
                )}
            </div>
    )
}

export default LanguageSelector

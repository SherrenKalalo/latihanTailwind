import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none"
      >
        Toggle Dropdown
      </button>
      {isOpen && (
        <div className="absolute top-10 right-0 bg-white border shadow-md">
          <ul>
            <li>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Menu Item 1</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Menu Item 2</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Menu Item 1</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Menu Item 2</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

import React, { useState } from 'react';

const Dropdown = ({ tags }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)} className="bg-white text-black py-2 px-4 rounded-lg shadow focus:outline-none border border-gray-300">
                {tags.length > 0 ? 'Search results' : 'Search not done'}
            </button>
            {isOpen && (
                <div className="absolute mt-1 w-full rounded-md shadow-lg bg-white z-10 border border-gray-300">
                    <ul>
                        {tags.map((tag, index) => (
                            <li key={index} className="px-4 py-2 hover:bg-gray-100 flex justify-between items-center border-b last:border-b-0">
                                {tag.name} <span className="text-red-500">{tag.count}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Dropdown;

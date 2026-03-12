import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

export const CurtainMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-center">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${isOpen ? "hidden" : ""} text-2xl p-2 focus:outline-none hover:bg-black/5 rounded-full transition-colors`}
            >
                <FaBars />
            </button>

            {/* Curtain Menu (Overlay) */}
            <div
                className={`fixed top-0 right-0 h-full bg-black/95 z-50 transition-all duration-300 ease-in-out overflow-hidden flex items-center justify-center ${
                    isOpen ? "w-full" : "w-0"
                }`}
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-5 right-5 text-4xl text-white hover:text-gray-300 transition-colors"
                >
                    &times;
                </button>
            
            </div>
        </div>
    );
};

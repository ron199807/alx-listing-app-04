import Button from "../common/Button";
import Image from "next/image";
import { useState } from "react";

export const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flex flex-col md:flex-row gap-4 py-6 justify-between" aria-label="Main navigation w-screen">
      {/* First row of buttons and dropdown */}
      <div className="flex flex-wrap gap-2 items-center">
        {/* Always visible buttons */}
        <a href="#" className="w-fit px-4 py-2 border rounded-full border-green-600 bg-gray-00 text-gray-800 hover:bg-gray-300 font-bold">
          All
        </a>
        <a href="#" className="w-fit px-2 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-xl">
          Top Villa
        </a>
        <a href="#" className="min-w-fit px-2 py-2 text-gray-800 bg-gray-200  hover:bg-gray-300 rounded-xl">
          Free Reschedule
        </a>

        {/* Dropdown for small screens */}
        <div className="md:hidden relative">
          <button 
            onClick={toggleDropdown}
            className="min-w-fit px-2 py-2 text-gray-800 hover:bg-gray-300 rounded-xl flex items-center"
          >
            <Image
              src="/assets/icons/arrow-down.svg"
              alt="More options"
              width={16}
              height={16}
              className={`ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
            />
          </button>
          
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <a href="#" className="block px-4 py-2 text-gray-800 bg-gray-200  hover:bg-gray-100">
                Book Now Pay Later
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800 bg-gray-200  hover:bg-gray-100">
                Self Check-in
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800 bg-gray-200  hover:bg-gray-100">
                Instant Book
              </a>
            </div>
          )}
        </div>

        {/* Hidden on small screens, visible on medium and up */}
        <div className="hidden md:flex gap-2">
          <a href="#" className="min-w-fit px-2 py-2 text-gray-800 bg-gray-200  hover:bg-gray-300 rounded-xl">
            Book Now Pay Later
          </a>
          <a href="#" className="min-w-fit px-2 py-2 text-gray-800 bg-gray-200  hover:bg-gray-300 rounded-xl">
            Self Check-in
          </a>
          <a href="#" className="min-w-fit px-2 py-2 text-gray-800 bg-gray-200  hover:bg-gray-300 rounded-xl">
            Instant Book
          </a>
        </div>
      </div>

      {/* Second row with filter and sort buttons */}
      <div className="flex justify-end gap-4">
        <a href="#" className="flex items-center gap-2 px-4 py-2 bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 rounded-xl">
            Filter
          <Image
            src="/assets/icons/Filter.svg"
            alt="Filter"
            width={16}
            height={16}
          />
        </a>
        <a href="#" className="flex items-center gap-2 px-4 py-2 bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 rounded-xl">
          Sort by: Highest Price
          <Image
            src="/assets/icons/arrow-down.svg"
            alt="Sort"
            width={16}
            height={16}
          />
        </a>
      </div>
    </nav>
  );
};
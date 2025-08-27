import Image from "next/image";
import Link from "next/link";

export const SearchHeader = () => {
  return (
    <section className="flex items-center justify-between w-screen px-4 sm:px-6 py-3 border-b border-gray-200 bg-white shadow-sm">
      {/* Logo on far left */}
      <div className="flex items-center w-10 h-10">
        <Image
          src="/assets/Vector.svg"
          alt="Company Logo"
          width={120}
          height={40}
          className="h-20 w-auto"
        />
      </div>

      {/* Search bar section - Desktop */}
      <div className="hidden md:flex p-4 items-center rounded-full shadow-sm hover:shadow-md transition-all duration-200">
        {/* Location input */}
        <div className="relative px-4 py-2 w-48">
          <label htmlFor="location" className="block text-xs font-bold text-gray-900 mb-1">
            Location
          </label>
          <input
            type="text"
            id="location"
            placeholder="Search destinations"
            className="w-full border-none text-sm focus:ring-0 focus:outline-none placeholder-gray-400"
          />
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-6 w-px bg-gray-300"></div>
        </div>

        {/* Check-in input */}
        <div className="relative px-4 py-2 w-40">
          <label htmlFor="checkin" className="block text-xs font-bold text-gray-900 mb-1">
            Check in
          </label>
          <input
            type="text"
            id="checkin"
            placeholder="Add dates"
            className="w-full border-none p-0 text-sm focus:ring-0 focus:outline-none placeholder-gray-400"
          />
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-6 w-px bg-gray-300 w-8"></div>
        </div>

        {/* Check-out input */}
        <div className="relative px-4 py-2 w-40">
          <label htmlFor="checkout" className="block text-xs font-bold text-gray-900 mb-1">
            Check out
          </label>
          <input
            type="text"
            id="checkout"
            placeholder="Add dates"
            className="w-full border-none p-0 text-sm focus:ring-0 focus:outline-none placeholder-gray-400"
          />
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-6 w-px bg-gray-300"></div>
        </div>

        {/* Guests input */}
        <div className="px-4 py-2 w-32">
          <label htmlFor="guests" className="block text-xs font-bold text-gray-900 mb-1">
            People
          </label>
          <input
            type="text"
            id="guests"
            placeholder="Add guests"
            className="w-full border-none p-0 text-sm focus:ring-0 focus:outline-none placeholder-gray-400"
          />
        </div>

        {/* Search button */}
        <button className="flex items-center justify-center p-3 bg-teal-600 text-white rounded-full mx-1 hover:bg-teal-700 transition-colors duration-200">
          <Image
            src="/assets/icons/Magnifer.svg"
            alt="Search"
            width={20}
            height={20}
            className="w-5 h-5"
          />
        </button>
      </div>

      {/* Search bar section - Mobile */}
      <div className="md:hidden flex items-center rounded-full shadow-sm hover:shadow-md transition-all duration-200">
        <div className="relative px-4 py-2 w-40">
          <label htmlFor="mobile-search " className="block text-xs font-bold text-gray-900 mb-1">
            Where to?
          </label>
          <input
            type="text"
            id="mobile-search"
            placeholder="Location · Date · Guest"
            className="w-full border-none text-sm focus:ring-0 focus:outline-none placeholder-gray-400"
          />
        </div>
        <button className="flex items-center justify-center p-3 bg-teal-600 text-white rounded-full mx-1 hover:bg-teal-700 transition-colors duration-200">
          <Image
            src="/assets/icons/Magnifer.svg"
            alt="Search"
            width={20}
            height={20}
            className="w-5 h-5"
          />
        </button>
      </div>

      {/* Sign in/Sign up links - Desktop */}
      <div className="hidden md:flex items-center justify-center space-x-4">
        <Link href="/signin" className="h-9 w-auto cursor-pointer font-bold bg-teal-600 text-white hover:bg-teal-800 rounded-full text-sm px-4 py-2 transition-colors duration-200">
          Sign in
        </Link>
        <Link href="/signup" className="h-9 w-auto cursor-pointer font-bold border border-teal-600 text-teal-600 hover:bg-teal-50 rounded-full text-sm px-4 py-2 transition-colors duration-200">
          Sign up
        </Link>
      </div>

      {/* User icon - Tablet */}
      <div className="hidden sm:flex md:hidden items-center justify-center">
        <button className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
          <Image
            src="/assets/icons/user2.svg" // Make sure you have a user icon in your assets
            alt="User"
            width={24}
            height={24}
            className="w-10 h-10 text-gray-200"
          />
        </button>
      </div>

      {/* User icon and search - Mobile */}
      <div className="flex sm:hidden items-center space-x-2">
        <button className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
          <Image
            src="/assets/icons/user.svg" // Make sure you have a user icon in your assets
            alt="User"
            width={24}
            height={24}
            className="w-6 h-6 text-gray-600"
          />
        </button>
      </div>
    </section>
  );
};
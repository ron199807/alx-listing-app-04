import Image from "next/image";
import Button from "../common/Button";
import { Navigation } from "./Navigation";
import { SearchHeader } from "./SearchHearder";
import { HeroImage } from "./HeroImage";
import { CategoriesSection } from "./CategorySection";

export const Header = () => {
  return (
    <header className="w-screen">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row justify-center items-center w-full bg-teal-600 gap-2 sm:gap-4 text-white py-2 px-4">
        <div className="flex-shrink-0">
          <Image
            className="w-6 object-cover cursor-pointer hover:bg-cyan-900 rounded"
            src="./assets/icons/Case.svg"
            alt="Travel information"
            width={24}
            height={24}
          />
        </div>
        <div className="text-center sm:text-left flex-grow">
          <p className="text-white text-sm sm:text-base">
            Overseas trip? Get the latest information on travel guides
          </p>
        </div>
        <div className="flex-shrink-0">
          <Button
            className="h-9 w-auto cursor-pointer font-bold bg-gray-950 text-white hover:bg-gray-600 rounded-xl px-4 py-2 text-sm sm:text-base"
            aria-label="More information about travel guides"
          >
            More Info
          </Button>
        </div>
      </div>

      {/* Search Header */}
      <div className="w-full">
        <SearchHeader />
      </div>

      {/* Categories Section */}
      <div className="w-full">
        <CategoriesSection />
      </div>

      {/* Hero Image */}
      <div className="w-full">
        <HeroImage />

        {/* Navigation */}
        <div className="w-full">
          <Navigation />
        </div>
      </div>
    </header>
  );
};

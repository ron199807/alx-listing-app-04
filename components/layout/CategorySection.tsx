import { CategoryIcon } from "../common/CategoryIcon";

const categories = [
  { src: "/assets/logo1/farm.svg", alt: "country side", label: "Countryside" },
  { src: "./assets/logo1/apartment.svg", alt: "Apartment", label: "Apartment" },
  { src: "./assets/logo1/barn.svg", alt: "Barn", label: "Barn" },
  { src: "./assets/logo1/cabin.svg", alt: "cabin", label: "Cabin" },
  { src: "./assets/logo1/castle-tower.svg", alt: "castle tower", label: "Castle Tower" },
  { src: "./assets/logo1/cottage.svg", alt: "cottage", label: "Cottage" },
  { src: "./assets/logo1/home.svg", alt: "home", label: "Home" },
  { src: "./assets/logo1/island.svg", alt: "island", label: "Island" },
  { src: "./assets/logo1/key-chain.svg", alt: "key chain", label: "Key Chain" },
  { src: "./assets/logo1/living-room.svg", alt: "living room", label: "Living Room" },
  { src: "./assets/logo1/mansion.svg", alt: "mansion", label: "Mansion" },
  { src: "./assets/logo1/palm-tree.svg", alt: "palm tree", label: "Palm Tree" },
  { src: "./assets/logo1/swimming-pool.svg", alt: "swimming pool", label: "Swimming Pool" },
  { src: "./assets/logo1/tent.svg", alt: "Tent", label: "Tent" },
  { src: "./assets/logo1/treehouse.svg", alt: "treehouse", label: "Treehouse" },
  { src: "./assets/logo1/vacations.svg", alt: "vacations icon", label: "Vacations" },
  { src: "./assets/logo1/villa.svg", alt: "villa", label: "Villa" },
];

export const CategoriesSection = () => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none" />
      <section className="flex items-center w-screen px-4 mb-8 bg-gray-100 p-4 overflow-x-auto scrollbar-hide">
        {categories.map((category, index) => (
          <CategoryIcon key={index} {...category} />
        ))}
      </section>
    </div>
  );
};
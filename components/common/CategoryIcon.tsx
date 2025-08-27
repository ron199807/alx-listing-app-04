import Image from "next/image";

interface CategoryIconProps {
  src: string;
  alt: string;
  label: string;
  className?: string;
  iconSize?: "sm" | "md" | "lg";
}

export const CategoryIcon = ({ 
  src, 
  alt, 
  label, 
  className = "",
  iconSize = "md"
}: CategoryIconProps) => {
  // Size variants for different screens
  const sizeVariants = {
    sm: {
      container: "w-10 h-10 p-2",
      image: "w-8 h-8",
      text: "text-xs"
    },
    md: {
      container: "w-12 h-12 p-3 md:w-14 md:h-14 md:p-3.5",
      image: "w-10 h-10 md:w-12 md:h-12",
      text: "text-sm md:text-base"
    },
    lg: {
      container: "w-16 h-16 p-4 md:w-20 md:h-20",
      image: "w-12 h-12 md:w-16 md:h-16",
      text: "text-base md:text-lg"
    }
  };

  return (
    <figure className={`group flex flex-col items-center space-y-1 md:space-y-2 transition-all duration-200 hover:scale-105 ${className}`}>
      <div className={`${sizeVariants[iconSize].container} bg-gray-50 rounded-full group-hover:bg-primary-50 transition-colors duration-200`}>
        <Image
          className={`${sizeVariants[iconSize].image} object-contain transition-transform duration-200 group-hover:scale-110`}
          src={src}
          alt={alt}
          width={48}
          height={48}
          loading="lazy"
        />
      </div>
      <figcaption className={`${sizeVariants[iconSize].text} font-medium text-gray-700 group-hover:text-primary-600 transition-colors duration-200 text-center`}>
        {label}
      </figcaption>
    </figure>
  );
};
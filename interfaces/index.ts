export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

export interface CardProps {
  title: string;
  location: string;
  price: number;
  rating: number;
  beds: number;
  baths: number;
  guests: number;
  amenities?: string[];
  onClick?: () => void;
}

export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
  description: string;
  amenities?: string[];
  reviewCount?: number;
   location: {
    city?: string;
    address?: string;
    country?: string;
  };
  host?: {
    name: string;
    isSuperhost: boolean;
    avatarUrl: string;
    description?: string;
    joinDate?: string;
  };
}

export interface PillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export interface LayoutProps {
  children: React.ReactNode;
}
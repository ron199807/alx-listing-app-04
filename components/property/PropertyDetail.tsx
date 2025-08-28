// components/property/PropertyDetail.tsx
import { useState } from 'react';
import { PropertyProps } from "@/interfaces/index";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState('description');
  
  // Mock reviews data - in a real app this would come from props or API
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      avatar: "/default-avatar.jpg",
      rating: 4.5,
      comment: "Great place to stay! The location was perfect and the host was very responsive."
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "/default-avatar.jpg",
      rating: 5,
      comment: "Absolutely loved our stay. The property was clean and had everything we needed."
    }
  ];

  // Fallback images if property images aren't available
  const propertyImages = property.image 
    ? [property.image, '/property-sample-2.jpg', '/property-sample-3.jpg', '/property-sample-4.jpg']
    : ['/property-sample-1.jpg', '/property-sample-2.jpg', '/property-sample-3.jpg', '/property-sample-4.jpg'];

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{property.name}</h1>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mt-2">
          <div className="flex items-center">
            <span className="text-yellow-500">★ {property.rating || 'New'}</span>
            {property.reviewCount && property.reviewCount > 0 && (
              <span className="ml-1 text-gray-600">({property.reviewCount} reviews)</span>
            )}
          </div>
          <span className="hidden md:block">·</span>
          <span className="text-gray-600">
            {property.location?.city || property.location?.address}, {property.location?.country}
          </span>
        </div>
      </div>

      {/* Image Grid - Responsive layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="md:col-span-2 row-span-2">
          <img 
            src={propertyImages[0] || property.image || '/property-sample-1.jpg'} 
            alt={property.name} 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {propertyImages.slice(1, 5).map((image: string, i: number) => (
          <div key={i} className="hidden md:block">
            <img 
              src={image} 
              alt={`${property.name} view ${i+1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Main Content with Booking Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Content */}
        <div className="lg:w-2/3">
          {/* Tabs Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {['description', 'amenities', 'reviews', 'host'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 font-medium text-sm border-b-2 ${
                    activeTab === tab
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1).replace(/([A-Z])/g, ' $1')}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="py-6">
            {activeTab === 'description' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">About this place</h2>
                <p className="text-gray-700 leading-relaxed">{property.description}</p>
              </div>
            )}

            {activeTab === 'amenities' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">What this place offers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.amenities && property.amenities.length > 0 ? (
                    property.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600">✓</span>
                        </div>
                        <span>{amenity}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">No amenities listed.</p>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <ReviewSection propertyId={property.id?.toString() || ''} />
            )}

            {activeTab === 'host' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">About the host</h2>
                <div className="flex items-center space-x-4">
                  <img 
                    src={property.host?.avatarUrl || "/default-avatar.jpg"} 
                    alt="Host" 
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{property.host?.name || "Property Host"}</h3>
                    <p className="text-gray-600">
                      {property.host?.joinDate ? `Joined in ${new Date(property.host.joinDate).getFullYear()}` : "Experienced host"}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">
                  {property.host?.description || "Our host is committed to providing great stays for all guests. They're responsive and available to help with anything you need during your stay."}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar - Booking Section */}
        <div className="lg:w-1/3">
          <div className="sticky top-6">
            <BookingSection price={property.price} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
import { useState } from 'react';
import { PropertyProps, ReviewProps } from "@/interfaces/index";
import BookingSection from "./BookingSection";
import Image from 'next/image';

const PropertyDetails: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'amenities' | 'reviews' | 'host'>('overview');
  const [showAllAmenities, setShowAllAmenities] = useState(false);

  // Mock reviews data
  const reviews: ReviewProps[] = [
    {
      id: 1,
      name: "John Doe",
      avatar: "/default-avatar.jpg",
      rating: 4.5,
      comment: "Great place to stay! The location was perfect and the host was very responsive.",
      date: "2023-05-15"
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "/default-avatar.jpg",
      rating: 5,
      comment: "Absolutely loved our stay. The property was clean and had everything we needed.",
      date: "2023-06-22"
    }
  ];

  // Mock images - in a real app these would come from the property object
  const propertyImages = [
    property.image,
    "/property-sample-1.jpg",
    "/property-sample-2.jpg",
    "/property-sample-3.jpg",
    "/property-sample-4.jpg"
  ];

  // Function to render star ratings
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Property Header */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{property.name}</h1>
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2">
          <div className="flex items-center">
            {renderStars(property.rating)}
            <span className="ml-2 text-gray-600">({property.reviewCount} reviews)</span>
          </div>
          <span className="hidden sm:inline-block text-gray-400">•</span>
          <div className="flex items-center mt-1 sm:mt-0">
            <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="ml-1 text-gray-600">
              {property.address.city}, {property.address.country}
            </span>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="md:col-span-2 row-span-2">
          <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden">
            <Image
              src={propertyImages[0]}
              alt={`Main view of ${property.name}`}
              layout="fill"
              objectFit="cover"
              className="transition duration-300 hover:scale-105"
            />
          </div>
        </div>
        {propertyImages.slice(1, 5).map((img, index) => (
          <div key={index} className="hidden md:block">
            <div className="relative h-full w-full rounded-xl overflow-hidden">
              <Image
                src={img}
                alt={`Property view ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition duration-300 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Content */}
        <div className="lg:w-2/3">
          {/* Tabs Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'amenities', label: 'Amenities' },
                { id: 'reviews', label: `Reviews (${reviews.length})` },
                { id: 'host', label: 'Host' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 px-1 font-medium text-sm border-b-2 ${
                    activeTab === tab.id
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="py-6">
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">About this property</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {property.description}
                </p>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Top amenities</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {property.category.slice(0, 6).map((amenity, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600">✓</span>
                        </div>
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                  {property.category.length > 6 && (
                    <button
                      onClick={() => setShowAllAmenities(!showAllAmenities)}
                      className="mt-4 text-green-600 font-medium"
                    >
                      {showAllAmenities ? 'Show less' : 'Show all amenities'}
                    </button>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'amenities' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">What this place offers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {property.category.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600">✓</span>
                      </div>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold">
                    Reviews · {renderStars(property.rating)} {property.rating.toFixed(1)}
                  </h2>
                  <button className="text-green-600 font-medium">Leave a review</button>
                </div>

                {reviews.length === 0 ? (
                  <p className="text-gray-500">No reviews yet.</p>
                ) : (
                  <div className="space-y-8">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                        <div className="flex items-start space-x-4">
                          <div className="relative w-12 h-12 rounded-full overflow-hidden">
                            <Image
                              src={review.avatar}
                              alt={review.name}
                              layout="fill"
                              objectFit="cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-semibold">{review.name}</h4>
                                <div className="flex items-center mt-1">
                                  {renderStars(review.rating)}
                                  <span className="ml-2 text-sm text-gray-500">
                                    {new Date(review.date || '').toLocaleDateString('en-US', {
                                      year: 'numeric',
                                      month: 'long',
                                      day: 'numeric'
                                    })}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <p className="mt-2 text-gray-700">{review.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'host' && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">About the host</h2>
                <div className="flex items-start space-x-6">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      src="/default-avatar.jpg"
                      alt="Host"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Alex Johnson</h3>
                    <p className="text-gray-600 mt-1">Host since 2020</p>
                    <div className="mt-4 flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Verified</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Superhost</span>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-700">
                      Hi, I'm Alex! I've been hosting guests for over 3 years and take pride in providing
                      exceptional stays. My properties are always clean, well-equipped, and in great locations.
                      I'm available 24/7 if you need anything during your stay.
                    </p>
                    <div className="mt-6">
                      <h4 className="font-medium mb-2">Response rate: 100%</h4>
                      <h4 className="font-medium">Response time: within an hour</h4>
                    </div>
                  </div>
                </div>
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

export default PropertyDetails;
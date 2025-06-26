import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";
import { useState } from "react";

const Pill = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium ${
        active
          ? "bg-blue-600 text-white"
          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  );
};

const PropertyCard = ({ property }: { property: PropertyProps }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative pb-2/3 h-48">
        <img
          src={property.image || "https://via.placeholder.com/300"}
          alt={property.name}
          className="w-full h-full object-cover"
        />
        {property.discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {property.discount}% OFF
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{property.name}</h3>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1">{property.rating}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-1">
          {property.address.city}, {property.address.country}
        </p>
        <p className="text-gray-600 text-sm mt-2">
          {property.offers.bed} beds · {property.offers.shower} showers · Up to {property.offers.occupants} guests
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {property.category.slice(0, 3).map((cat, i) => (
            <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
              {cat}
            </span>
          ))}
        </div>
        <div className="mt-4 flex justify-between items-center">
          <p className="text-lg font-semibold">${property.price}/night</p>
          <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const filters = ["Top Villa", "Self Checkin", "Mountain View", "Beachfront", "Luxury", "Pool"];

  return (
    <div className="pb-12">
      {/* Hero Section */}
      <div className="relative bg-blue-700 text-white py-20 px-4">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-xl md:text-2xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              active={activeFilter === filter}
              onClick={() =>
                setActiveFilter(activeFilter === filter ? null : filter)
              }
            />
          ))}
        </div>
      </div>

      {/* Property Listing Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}
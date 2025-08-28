import type { NextPage } from "next";
import { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import Card from "../components/common/Card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  beds: number;
  baths: number;
  guests: number;
  amenities: string[];
}

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties");
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
        setError("Failed to load properties. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>ALX Listing App - Find Your Perfect Stay</title>
        <meta
          name="description"
          content="Discover the best properties worldwide"
        />
        <style>{`
          html, body {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          *, *:before, *:after {
            box-sizing: inherit;
          }
        `}</style>
      </Head>

      <Header />

      <main className="flex-1 container mx-auto px-4 py-6 w-full overflow-hidden">
        {loading && (
          <div className="flex justify-center items-center h-64">
            <p className="text-lg">Loading properties...</p>
          </div>
        )}

        {error && (
          <div className="flex justify-center items-center h-64">
            <p className="text-red-500 text-lg">{error}</p>
          </div>
        )}

        {!loading && !error && properties.length === 0 && (
          <div className="flex justify-center items-center h-64">
            <p className="text-lg">No properties available at the moment.</p>
          </div>
        )}

        {/* Properties Grid */}
        {!loading && !error && properties.length > 0 && (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-6">
            {properties.map((property) => (
              <Card
                key={property.id}
                title={property.title}
                location={property.location}
                price={property.price}
                rating={property.rating}
                beds={property.beds}
                baths={property.baths}
                guests={property.guests}
                amenities={property.amenities}
                onClick={() => console.log("Card clicked")}
              />
            ))}
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
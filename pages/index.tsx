import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Card from "../components/common/Card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";


export default function Home() {
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
       
        {/* Properties Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-6">
          {PROPERTYLISTINGSAMPLE.map((property) => (
            <Card
              // key={property.id}
              title="Villa Arrecife Beach House"
              location="Sideman, Bali, Indonesia"
              price={2450}
              rating={4.76}
              beds={4}
              baths={2}
              guests={4}
              amenities={["Top Villa", "Self CheckIn", "Free Reschedule"]}
              onClick={() => console.log("Card clicked")}
            />
          ))}
        </section>

       
      </main>

      <Footer />
    </div>
  );
}
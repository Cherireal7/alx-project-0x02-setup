import React from "react";
import Card from "@/components/common/Card";

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">Welcome to the Home Page</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="Getting Started"
          content="This card helps you get started with your Next.js project using TypeScript and Tailwind CSS."
        />
        <Card
          title="Documentation"
          content="Explore the official Next.js docs to learn more about routing, APIs, and rendering."
        />
        <Card
          title="ALX Listings"
          content="Showcase your listings and services using this platform. Dynamic, fast, and customizable."
        />
      </div>
    </div>
  );
};

export default HomePage;

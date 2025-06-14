import React from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">Welcome to the Home Page</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Card 1" content="This is the content of card 1." />
          <Card title="Card 2" content="This is the content of card 2." />
          <Card title="Card 3" content="This is the content of card 3." />
        </div>
      </div>
    </>
  );
};

export default HomePage;

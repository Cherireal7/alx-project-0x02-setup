import React from "react";
import Header from "../components/layout/Header";

const IndexPage = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-8">
        <h1 className="text-3xl font-bold">Welcome to ALX Project</h1>
        <p>This is the main landing page at /</p>
      </main>
    </>
  );
};

export default IndexPage;

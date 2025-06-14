import React from "react";
import Button from "@/components/common/Button";

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6 text-center space-y-6">
      <h1 className="text-3xl font-bold text-blue-700">About Us</h1>
      <p className="text-gray-700 mb-6">
        This page demonstrates reusable UI components like buttons with different styles.
      </p>

      <div className="space-y-4">
        <Button size="small" shape="rounded-sm">
          Small Rounded-sm
        </Button>
        <Button size="medium" shape="rounded-md">
          Medium Rounded-md
        </Button>
        <Button size="large" shape="rounded-full">
          Large Rounded-full
        </Button>
      </div>
    </div>
  );
};

export default AboutPage;

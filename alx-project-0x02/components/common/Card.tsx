import React from "react";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-semibold mb-2 text-blue-600">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Card;

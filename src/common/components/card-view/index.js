import React, { memo } from "react";
import PropTypes from "prop-types";
import Image1 from "../../../assets/images/image1.jpeg";

function CardView({ imageUrl, name, category, price, rating, brand }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden cursor-default">
      <div className="aspect-video relative">
        <img src={Image1} alt=""className="w-full h-full object-cover blur absolute"/>
        <img src={Image1} alt="" className="w-full h-full object-contain absolute"/>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">{category}</p>
        <p className="text-sm text-gray-600 mt-1">Brand: {brand}</p>
        <p className="text-lg font-bold text-gray-800 mt-2">
          ${price.toFixed(2)}
        </p>
        <p className="text-sm text-yellow-500 mt-1">Rating: {rating} ⭐</p>
      </div>
    </div>
  );
}

CardView.propTypes = {
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    brand: PropTypes.string,
  };

export default memo(CardView);

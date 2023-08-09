"use client";

import React, { useEffect, useRef } from "react";


const ProductInput = () => {
  return (
    <input className="text-black text-center text-md mb-2 min-h-[40px] w-[300px] sm:w-[400px] rounded-lg" type="text" placeholder="Product name" />
  );
};

export default ProductInput;
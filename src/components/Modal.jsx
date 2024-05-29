"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

import Spinner from "./Spinner";
import CloseModal from "./CloseModal";

const Product = ({ id }) => {
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product" + id],
    queryFn: async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = res.json();
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="absolute w-full h-full top-0 left-0 bg-gray-700 bg-opacity-5 flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center w-full h-full text-red-600">
        Error with fetching products, please try again later
      </div>
    );
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-100 bg-opacity-5 flex items-center justify-center">
      <motion.div
        className="w-3/4 h-3/4 sm:w-1/2 sm:h-2/3 border-4 py-5 px-4 rounded-lg  overflow-auto bg-white"
        initial={{ opacity: 0, y: 1000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.4 }}
      >
        <CloseModal />
        <motion.div
          className="relative w-full h-1/2 mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.4, delay: 0.4 }}
        >
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={true}
          />
        </motion.div>
        <motion.div
          className="flex flex-col justify-between gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.4, delay: 0.6 }}
        >
          <span className="text-primary font-semibold">{product.title}</span>
          <span className="text-sm text-gray-600 break-words">
            {product.description}
          </span>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500 font-semibold capitalize">
              Category: {product.category}
            </span>
            <span className="text-right">${product.price}</span>
          </div>
          <div className="relative flex items-center gap-1 sm:gap-2 text-sm">
            Rate: {product?.rating?.rate}
            <Image src="/star.png" alt="star" width={20} height={20} />
            <span className="text-xs text-star font-semibold">
              {product.rating.count} has rated this product
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Product;

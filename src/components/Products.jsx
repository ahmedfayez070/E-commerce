"use client";

import { useContext } from "react";
import { SearchContext } from "@/context/SearchContext";
import Card from "./Card";
import SkeletonCard from "./SkeletonCard";
import { useQuery } from "@tanstack/react-query";

const Products = () => {
  const { searchName } = useContext(SearchContext);

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://fakestoreapi.com/products/");
      const data = res.json();
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex flex-wrap justify-center sm:justify-between gap-5 max-w-6xl mx-auto p-5">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
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

  const filteredData = products.filter((product) =>
    product.title.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div className="flex flex-wrap justify-center sm:justify-between gap-5 max-w-6xl mx-auto p-5">
      {filteredData?.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;

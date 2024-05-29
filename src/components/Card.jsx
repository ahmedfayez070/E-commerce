"use client";

import Image from "next/image";

import { useContext } from "react";
import { ModalContext } from "@/context/ModalContext";
import Product from "./Modal";

const Card = ({ product }) => {
  const { modalOpen, modalId, setModalOpen, setModalId } =
    useContext(ModalContext);

  const handleOpenModal = () => {
    setModalId(product.id);
    setModalOpen(true);
  };

  return (
    <>
      <div
        className="flex flex-col gap-5 w-72 h-96 border py-5 px-4 rounded-lg shadow-md cursor-pointer"
        onClick={handleOpenModal}
      >
        <div className="relative w-full h-2/3">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={true}
            className="hover:scale-105 transition-all"
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-primary font-semibold">{product.title}</span>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500 font-semibold capitalize">
              Category: {product.category}
            </span>
            <span className="text-right">${product.price}</span>
          </div>
          <div className="relative flex items-center gap-2 text-sm">
            Rate: {product?.rating?.rate}
            <Image src="/star.png" alt="star" width={20} height={20} />
            <span className="text-xs text-star font-semibold">
              {product.rating.count} has rated this product
            </span>
          </div>
        </div>
      </div>
      {modalOpen && <Product id={modalId} />}
    </>
  );
};

export default Card;

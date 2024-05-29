"use client";

import { useContext } from "react";
import { ModalContext } from "@/context/ModalContext";

import { motion } from "framer-motion";
import Image from "next/image";

const CloseModal = () => {
  const { setModalOpen } = useContext(ModalContext);

  return (
    <motion.div
      className="relative flex justify-end"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.4, delay: 0.2 }}
    >
      <Image
        src="/close.png"
        alt="close"
        width={25}
        height={25}
        onClick={() => setModalOpen(false)}
        className="cursor-pointer"
      />
    </motion.div>
  );
};

export default CloseModal;

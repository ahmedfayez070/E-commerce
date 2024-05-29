"use client";

import { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalId, setModalId] = useState(false);

  return (
    <ModalContext.Provider
      value={{ modalOpen, setModalOpen, modalId, setModalId }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;

import { useState } from 'react';

export const useModal = (open = false) => {
  const [isOpen, setIsOpen] = useState(open);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return { isOpen, openModal, closeModal };
};

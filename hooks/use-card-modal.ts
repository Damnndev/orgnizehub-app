import { create } from "zustand";

type CardModalStore = {
  id?: string;
  isOpen: boolean;
  onClose: () => void;
  onOpen: (id: string) => void;
};

export const useCardModal = create<CardModalStore>((set) => ({
  id: undefined,
  isOpen: false,
  onClose: () => set({ isOpen: false, id: undefined}),
  onOpen: (id: string) => set({ isOpen: true, id }),
}));

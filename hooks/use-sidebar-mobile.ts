import {create} from "zustand";

type SidebarMobileStore = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

export const useSidebarMobile = create<SidebarMobileStore>((set) => ({
  isOpen: false,
  onClose: () => set({isOpen: false}),
  onOpen: () => set({isOpen: true}),
}));
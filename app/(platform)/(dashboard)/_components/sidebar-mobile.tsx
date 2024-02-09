"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useSidebarMobile } from "@/hooks/use-sidebar-mobile";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Sidebar } from "./sidebar";

export const SidebarMobile = () => {
  const pathName = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  const onOpen = useSidebarMobile((state) => state.onOpen);
  const isOpen = useSidebarMobile((state) => state.isOpen);
  const onClose = useSidebarMobile((state) => state.onClose);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    onClose();
  }, [pathName, onClose]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Button
        onClick={onOpen}
        className="block sm:hidden mr-2"
        size="sm"
        variant="ghost"
      >
        <Menu className="h-4 w-4" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="p-2 pt-10">
          <Sidebar storageKey="orghub-mobile-sidebar-state" />
        </SheetContent>
      </Sheet>
    </>
  );
};

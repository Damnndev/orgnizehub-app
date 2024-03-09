"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CardWithList } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useCardModal } from "../../../hooks/use-card-modal";
import { Header } from "./header";

export const CardModal = () => {
  const id = useCardModal((state) => state.id);
  const isOpen = useCardModal((state) => state.isOpen);
  const onClose = useCardModal((state) => state.onClose);

  const { data: cardData } = useQuery<CardWithList>({
    queryKey: ["card", id],
    queryFn: () => fetch(`/api/cards/${id}`).then((res) => res.json()),
  });

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        {!cardData ? <Header.Skeleton /> : <Header data={cardData} />}
      </DialogContent>
    </Dialog>
  );
};
"use client";

import { updateListOrder } from "@/actions/update-list-order";
import { updateCardOrder } from "@/actions/update-card-order";
import { useAction } from "@/hooks/use-action";
import { ListWithCards } from "@/types";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ListForm } from "./list-form";
import { ListItem } from "./list-item";
interface ListContainerProps {
  data: ListWithCards[];
  boardId: string;
}

function reorder<T>(list: T[], startIndex: number, endIndex: number) {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

export const ListContainer = ({ data, boardId }: ListContainerProps) => {
  const [orderedData, setOrderedData] = useState(data);

  const { execute: executeUpdateListOrder } = useAction(updateListOrder, {
    onSuccess: () => {
      toast.success("List reordered successfully");
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const { execute: executeUpdateCardOrder } = useAction(updateCardOrder, {
    onSuccess: () => {
      toast.success("Card reordered successfully");
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  useEffect(() => {
    setOrderedData(data);
  }, [data]);

  const onDragEnd = (result: any) => {
    const { destination, source, type } = result;

    if (!destination) return;

    // If dropped in the same postion
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // User moved a list
    if (type === "list") {
      const items = reorder(orderedData, source.index, destination.index).map(
        (item, index) => ({ ...item, order: index })
      );

      setOrderedData(items);
      executeUpdateListOrder({ items, boardId });
    }

    // User moved a card
    if (type === "card") {
      let newOrderData = [...orderedData];
      // from list and to list
      const fromList = newOrderData.find(
        (list) => list.id === source.droppableId
      );
      const toList = newOrderData.find(
        (list) => list.id === destination.droppableId
      );

      if (!fromList || !toList) return;

      // Check if cards exist on the fromList
      if (!fromList.cards) {
        fromList.cards = [];
      }

      // Check if cards exist on the toList
      if (!toList.cards) {
        toList.cards = [];
      }

      // Move card in same list
      if (source.droppableId === destination.droppableId) {
        const reorderedCards = reorder(
          fromList.cards,
          source.index,
          destination.index
        ).map((item, index) => ({ ...item, order: index }));

        reorderedCards.forEach((card, index) => {
          card.order = index;
        });

        fromList.cards = reorderedCards;

        setOrderedData(newOrderData);
        executeUpdateCardOrder({ items: reorderedCards, boardId });
      } else {
        // Move card into another list
        // Remove card from fromList
        const [moveCard] = fromList.cards.splice(source.index, 1);

        // Assign the new listId to moved card
        moveCard.listId = destination.droppableId;
        // Add card to toList
        toList.cards.splice(destination.index, 0, moveCard);

        fromList.cards.forEach((card, index) => {
          card.order = index;
        });

        // Update order for each card in toList
        toList.cards.forEach((card, index) => {
          card.order = index;
        });

        setOrderedData(newOrderData);
        executeUpdateCardOrder({ items: toList.cards, boardId });
      }
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="lists" type="list" direction="horizontal">
        {(provided) => (
          <ol
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex gap-x-3 h-full"
          >
            {orderedData.map((list, index) => {
              return <ListItem key={list.id} index={index} data={list} />;
            })}
            {provided.placeholder}
            <ListForm />
            <div className="flex-shrink-0 w-1" />
          </ol>
        )}
      </Droppable>
    </DragDropContext>
  );
};

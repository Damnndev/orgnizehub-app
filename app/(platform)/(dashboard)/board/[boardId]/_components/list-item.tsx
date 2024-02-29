"use client";

import { cn } from "@/lib/utils";
import { ListWithCards } from "@/types";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import { ElementRef, useRef, useState } from "react";
import { CardForm } from "./card-form";
import { CardItem } from "./card-item";
import { ListHeader } from "./list-header";
interface ListItemProps {
  index: number;
  data: ListWithCards;
}

export const ListItem = ({ index, data }: ListItemProps) => {
  const textareaRef = useRef<ElementRef<"textarea">>(null);
  const [isEditing, setIsEditing] = useState(false);

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      textareaRef.current?.focus();
    }, 0);
  };

  const disableEditing = () => {
    setIsEditing(false);
  };

  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <li
          {...provided.draggableProps}
          ref={provided.innerRef}
          className="shrink-0 h-full w-[272px] select-none"
        >
          <div
            {...provided.dragHandleProps}
            className="w-full rounded-md bg-[#f1f2f4] shadow-md pb-2"
          >
            <ListHeader data={data} onAddCard={enableEditing} />
            <Droppable droppableId={data.id} type="card">
              {(provided) => (
                <ol
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={cn(
                    "flex flex-col gap-y-2 px-1 py-0.5 mx-1",
                    data.cards.length > 0 ? "mt-2" : "mt-0"
                  )}
                >
                  {data.cards.map((card, index) => (
                    <CardItem key={card.id} index={index} data={card} />
                  ))}
                  {provided.placeholder}
                </ol>
              )}
            </Droppable>
            <CardForm
              ref={textareaRef}
              listId={data.id}
              isEditing={isEditing}
              enableEditing={enableEditing}
              disableEditing={disableEditing}
            />
          </div>
        </li>
      )}
    </Draggable>
  );
};

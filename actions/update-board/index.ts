"use server";

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { UpdateBoard } from "./schema";
import { InputType, ReturnType } from "./types";
import { createSafeActions } from "@/lib/create-safe-actions";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }

  const { title, id } = data;
  let board;

  try {
    board = await db.board.update({
      where: {
        id,
        orgId,
      },
      data: {
        title,
      },
    });

    // await createAuditLog({
    //   entityTitle: board.title,
    //   entityId: board.id,
    //   entityType: ENTITY_TYPE.BOARD,
    //   action: ACTION.UPDATE,
    // });
  } catch (error) {
    return {
      error: "Failed to update.",
    };
  }

  revalidatePath(`/board/${id}`);
  return { data: board };
};

export const updateBoard = createSafeActions(UpdateBoard, handler);

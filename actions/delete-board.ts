"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function deleteBoard(boardId: string) {
  await db.board.delete({
    where: {
      id: boardId,
    },
  });

  revalidatePath("/organization/org_2bomY8AiYuG9ipzDjql2N13nnlo");
}

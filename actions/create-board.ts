"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export type State = {
  errors?: {
    title?: string[];
  };
  message?: string | null;
};

const CreateBoard = z.object({
  title: z.string().min(3, {
    message: "Title must be at least 3 characters long",
  }),
});

export async function createBoard(prevState: State, formData: FormData) {
  const validateFields = CreateBoard.safeParse({
    title: formData.get("title"),
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "There was an error creating the board",
    };
  }

  try {
    const { title } = validateFields.data;
    await db.board.create({
      data: {
        title,
      },
    });
  } catch (error) {
    return {
      message: "Database error",
    };
  }

  revalidatePath("/organization/org_2bomY8AiYuG9ipzDjql2N13nnlo");
  redirect("/organization/org_2bomY8AiYuG9ipzDjql2N13nnlo");
}

"use server";

import { prisma } from "@/prisma";

export const deleteTaskAction = async (input: { id: string }) => {
  const task = await prisma.todo.findFirst({
    where: {
      id: input.id
    }
  });

  if (!task) {
    throw new Error("La tâche n'existe pas.");
  }

  const deleteTask = await prisma.todo.delete({
    where: {
      id: input.id
    }
  });

  return deleteTask;
};

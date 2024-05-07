"use server";

import { prisma } from "@/prisma";

export const importantFlagAction = async (input: { id: string }) => {
  const task = await prisma.todo.findFirst({
    where: {
      id: input.id
    }
  });

  if (!task) {
    throw new Error("La tâche n'existe pas.");
  }

  const importantFlagTask = await prisma.todo.update({
    where: {
      id: input.id
    },
    data: {
      priority: !task.priority
    }
  });

  return importantFlagTask;
};

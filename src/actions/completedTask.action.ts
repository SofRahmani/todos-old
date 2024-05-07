"use server";

import { prisma } from "@/prisma";

export const completedTaskAction = async (input: { id: string }) => {
  const task = await prisma.todo.findFirst({
    where: {
      id: input.id
    }
  });

  if (!task) {
    throw new Error("La tâche n'existe pas.");
  }

  const completedTask = await prisma.todo.update({
    where: {
      id: input.id
    },
    data: {
      completed: !task.completed
    }
  });

  return completedTask;
};

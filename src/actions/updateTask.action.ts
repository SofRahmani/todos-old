"use server";

import { prisma } from "@/prisma";
import { TaskSchemaType } from '@/types/TaskSchema'

interface UpdateTaskActionInput {
  id: string
  input: TaskSchemaType
}

export const updateTaskAction = async ({input, id}: UpdateTaskActionInput) => {
  const task = await prisma.todo.findFirst({
    where: {
      id: id
    }
  });

  if (!task) {
    throw new Error("La tâche n'existe pas.");
  }

  const updateTask = await prisma.todo.update({
    where: {
      id: id
    },
    data: {
      ...input
    }
  });

  return updateTask;
};

'use server'

import { userAction } from '@/lib/safe-action'
import { prisma } from '@/prisma'
import { TaskSchema } from '@/types/TaskSchema'

export const createTaskAction = userAction(TaskSchema, async (input, context) => {

  const newTask = await prisma.todo.create({
    data: {
      ...input,
      userId: context.user.id,
    },
  });

  return newTask
})
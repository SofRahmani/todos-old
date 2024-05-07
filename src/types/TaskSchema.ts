import { z } from 'zod';

// ? Schema de validation pour les tâches
export const TaskSchema = z.object({
  title: z.string().max(20, { message: 'Le titre doit contenir 20 charactères maximum.' }).describe("Titre de la tâche"),
  information: z.string().max(165, { message: 'Les information ne peuvent pas dépasser 165 charactères.' }).optional().describe("Informations supplémentaires"),
  priority: z.boolean().default(false).describe("Prioritaire").optional(),
  dueDate: z.date().optional().describe("Date d'échéance"),
  completed: z.boolean().default(false).describe("Terminée").optional(),
});

export type TaskSchemaType = z.infer<typeof TaskSchema>;

// ? Schema de validation pour l'ID des tâches
export const IdTask = z.object({
  id: z.string().uuid()
});

export type DeleteTaskType = z.infer<typeof IdTask>;
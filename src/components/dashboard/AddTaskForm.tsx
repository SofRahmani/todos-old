"use client";

import { createTaskAction } from "@/actions/createTask.action";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { TaskSchema, TaskSchemaType } from "@/types/TaskSchema";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import AutoForm, { AutoFormSubmit } from "../auto-form";

interface AddTaskFormProps {
  children: React.ReactNode;
}

export const AddTaskForm = ({ children }: AddTaskFormProps) => {
  const router = useRouter();

  const handleSubmit = async (values: TaskSchemaType) => {
    try {
      await createTaskAction(values);
      toast.success("Tâche créée avec succès.");
    } catch (error) {
      toast.error("Une erreur est survenue lors de la création de la tâche.");
      console.error(error);
    }

    router.refresh();
  };

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Créer une nouvelle tâche</DialogTitle>
          <DialogDescription>
            Remplissez les informations pour créer une nouvelle tâche.
          </DialogDescription>
        </DialogHeader>
        <AutoForm
          formSchema={TaskSchema}
          onSubmit={handleSubmit}
          fieldConfig={{
            completed: {
              fieldType: "switch",
              description: "Cochez cette case si la tâche est terminée."
            },
            priority: {
              fieldType: "switch",
              description: "Cochez cette case si la tâche est prioritaire."
            },
            title: {
              inputProps: {
                placeholder: "Faire une lessive"
              }
            },
            information: {
              inputProps: {
                placeholder: "Avec de la lessive en poudre..."
              },
              fieldType: "textarea"
            }
          }}
        >
          <AutoFormSubmit className="w-full">Créer une tâche !</AutoFormSubmit>
        </AutoForm>
      </DialogContent>
    </Dialog>
  );
};

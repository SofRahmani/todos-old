"use client";
import { deleteTaskAction } from "@/actions/deleteTask.action";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "../ui/button";

export interface DeleteButtonProps {
  id: string;
}

export default function DeleteButton({ id }: DeleteButtonProps) {
  const router = useRouter();

  const handleDelete = async (id: string) => {
    try {
      await deleteTaskAction({ id });
      toast.success("Tâche supprimée avec succès.");
    } catch (error) {
      toast.error("Une erreur est survenue lors de la suppression de la tâche.");
      console.error(error);
    }
    router.refresh();
  };

  return (
    <Button
      variant="ghost"
      onClick={() => {
        handleDelete(id);
        console.log(id);
      }}
    >
      <Trash2 />
    </Button>
  );
}

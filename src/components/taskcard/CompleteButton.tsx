"use client";
import { completedTaskAction } from "@/actions/completedTask.action";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export interface CompleteButtonProps {
  status: boolean;
  id: string;
}

type variantType = "destructive" | "default" | "secondary" | "outline" | null | undefined;

export default function CompleteButton({ status, id }: CompleteButtonProps) {
  const [isComplete, setIsComplete] = useState<variantType>("destructive");
  const [isCompleteContent, setIsCompleteContent] = useState<string>("A faire");
  const router = useRouter();

  useEffect(() => {
    switch (status) {
      case true:
        setIsComplete("default");
        setIsCompleteContent("Terminée");
        break;
      case false:
        setIsComplete("destructive");
        setIsCompleteContent("A faire");
        break;
    }
  }, [status]);

  const handleComplete = async (id: string) => {
    try {
      await completedTaskAction({ id });
      toast.success(`Tâche terminée avec succès.`);
    } catch (error) {
      console.error(error);
      toast.error("Une erreur est survenue lors de la mise à jour de la tâche.");
    }

    router.refresh();
  };

  return (
    <Badge
      onClick={() => {
        handleComplete(id);
      }}
      variant={isComplete}
      className=" cursor-pointer hover:scale-110 "
    >
      {isCompleteContent}
    </Badge>
  );
}

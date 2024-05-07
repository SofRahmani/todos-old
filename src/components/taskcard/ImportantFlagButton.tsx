"use client";
import { importantFlagAction } from "@/actions/importantFlag.action";
import { Flag } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { DeleteTaskType } from '@/types/TaskSchema'

export interface ImportantFlagButtonProps {
  status: boolean;
  id: string;
}

export default function ImportantFlagButton({ status, id }: ImportantFlagButtonProps) {
  const [isImportant, setIsImportant] = useState("text-white");
  const router = useRouter();

  useEffect(() => {
    switch (status) {
      case true:
        setIsImportant("text-orange-500 animate-bounce");
        break;
      case false:
        setIsImportant("text-white");
        break;
    }
  }, [status]);

  const handleImportantFlag = async (id: string) => {
    try {
      await importantFlagAction({ id });
      toast.success(`Tâche mise à jour.`)
    } catch (error) {
      console.error(error);
      toast.error("Une erreur est survenue lors de la mise à jour de la tâche.");
    }

    router.refresh();
  };


  return (
    <Button variant="ghost" onClick={() => {
      handleImportantFlag(id);
    }}>
      <Flag className={`${isImportant}`} />
    </Button>
  );
}

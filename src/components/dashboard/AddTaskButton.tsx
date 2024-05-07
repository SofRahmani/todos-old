"use client";
import { Plus } from "lucide-react";

export default function AddTaskButton() {
  return (
    <div className="cursor-pointer rounded-full bg-primary p-2 shadow-xl hover:scale-105">
      <Plus />
    </div>
  );
}

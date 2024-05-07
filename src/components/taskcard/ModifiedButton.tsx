"use client";
import { PenLine } from "lucide-react";

export interface ModifiedButtonProps {}

export default function ModifiedButton({}: ModifiedButtonProps) {
  return (
    <div className="cursor-pointer rounded-lg px-4 py-2 hover:bg-primary/20">
      <PenLine />
    </div>
  );
}

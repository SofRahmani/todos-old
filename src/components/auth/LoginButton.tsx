"use client";
import { signInAction } from "@/actions/auth.action";
import { Button } from "@/components/ui/button";

interface LoginButtonProps {
  children?: React.ReactNode;
  className?: string;
}

export default function LoginButton({children, className}: LoginButtonProps) {
  return (
    <Button
      variant={"secondary"}
      size={"sm"}
      onClick={() => {
        signInAction();
      }}
      className={className}
    >
      {children}
    </Button>
  );
}

"use client";
import { signInAction } from "@/actions/auth.action";
import { Button } from "@/components/ui/button";

export default function LoginButton() {
  return (
    <Button
      variant={"secondary"}
      size={"sm"}
      onClick={() => {
        signInAction();
      }}
    >
      Me connecter
    </Button>
  );
}

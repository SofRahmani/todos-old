"use client"; 
import { signOutAction } from "@/actions/auth.action";
import { Button } from "@/components/ui/button";

export default function LogoutButton() {
  return (
    <Button
      variant={"default"}
      onClick={() => {
        signOutAction();
      }}
    >
      Déconnexion
    </Button>
  );
}

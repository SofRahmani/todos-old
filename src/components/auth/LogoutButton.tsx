"use client"; 
import { signOutAction } from "@/actions/auth.action";
import { Button } from "@/components/ui/button";
import { LogOutIcon } from 'lucide-react'

export default function LogoutButton() {
  return (
    <Button
      variant={"link"}
      className='text-red-400'
      onClick={() => {
        signOutAction();
      }}
    >
      Déconnexion
      <LogOutIcon className='ml-4' />
    </Button>
  );
}

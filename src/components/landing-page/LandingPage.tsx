"use client";
import LoginButton from "../auth/LoginButton";
import { TypewriterEffect } from "../ui/typewriter-effect";

export function LandingPage() {
  const words = [
    {
      text: "Plus"
    },
    {
      text: "aucun"
    },
    {
      text: "oublie"
    },
    {
      text: "grâce"
    },
    {
      text: "à"
    },
    {
      text: "Todos.",
      className: "text-blue-500 dark:text-blue-500"
    }
  ];
  return (
    <div className="flex h-[40rem] flex-col items-center justify-center ">
      <p className="mb-10 text-base text-neutral-600  dark:text-neutral-200">
        En route vers notre liberté mental
      </p>
      <TypewriterEffect words={words} />
      <div className="mt-10 flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <LoginButton className="h-10 w-40 rounded-xl border border-transparent bg-black text-sm text-white dark:border-white">
          Nous rejoindre
        </LoginButton>
        <LoginButton className="h-10 w-40 rounded-xl border border-black bg-white text-sm  text-black">
          Me connecter
        </LoginButton>
      </div>
    </div>
  );
}

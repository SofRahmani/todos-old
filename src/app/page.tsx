import { baseAuth } from "@/auth/auth";
import { LandingPage } from "@/components/landing-page/LandingPage";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import Logo from "../../public/logo.svg";

export default async function Home() {
  const session = await baseAuth();

  if (session?.user) {
    redirect("/user/tasks");
  }

  return (
    <>
      <main className=" relative z-50 flex size-full min-h-screen flex-col items-center justify-start">
        <header className="flex h-16 w-full justify-between p-4">
          <Image src={Logo} alt="logo" width={100} height={100} />
          <div>
            <Link href={"https://github.com/SofRahmani/todos"} target="_blank">
              <Github />
            </Link>
          </div>
        </header>
        <div className="size-full flex-1">
          <LandingPage />
        </div>
        <footer>
          <p>
            © 2021 Todos -{" "}
            <Link href={"https://www.sofiane-rahmani.com/fr"} target="_blank">
              <Button variant="link">Sofiane Rahmani</Button>
            </Link>{" "}
          </p>
        </footer>
      </main>
      <BackgroundBeams />
    </>
  );
}

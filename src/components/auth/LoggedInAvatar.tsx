import { baseAuth } from "@/auth/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function LoggedInAvatar() {
  const session = await baseAuth(); // Nous permet de récupérer la session s'il y en a une.
  const user = session?.user; // Permet de cibler l'utilisateur connecté.

  const firstPartOfEmail = user?.email?.split("@")[0]; // Optionnel, permet de récupérer le premier partie de l'email.

  return (
    <Avatar>
      <AvatarFallback>{user?.name ? user?.name[0] : ""}</AvatarFallback>
      {user?.image ? (
        <AvatarImage
          className="cursor-pointer select-none"
          src={user?.image}
          alt={`${user?.name ?? "User"}'s image`}
        />
      ) : (
        <AvatarImage
          className="cursor-pointer select-none"
          src={`https://api.dicebear.com/8.x/avataaars-neutral/svg?seed=${
            user?.name ?? firstPartOfEmail
          }`}
          alt={`${user?.name ?? "User"}'s image`}
        />
      )}
    </Avatar>
  );
}

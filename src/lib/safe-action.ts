import { currentUser } from "@/auth/current-user";
import { createSafeActionClient } from "next-safe-action";

export class ActionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ActionError";
  }
}

const handleReturnedServerError = (error: Error) => {
  if (error instanceof ActionError) {
    return error.message;
  }
  return "Une erreur est survenue. Veuillez réessayer plus tard.";
};

export const action = createSafeActionClient({
  handleReturnedServerError: handleReturnedServerError,
});

export const userAction = createSafeActionClient({
  handleReturnedServerError: handleReturnedServerError,
  middleware: async () => {
    const user = await currentUser();

    if (!user) {
      throw new ActionError("Vous devez être connecté pour effectuer cette action.");
    }

    return { user };
  },
});

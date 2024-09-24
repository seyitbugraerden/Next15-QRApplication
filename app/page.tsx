import AuthenticationPage from "@/components/authentication";
import { requireUser } from "./require-user";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await requireUser();
  if (user) {
    redirect("/dashboard");
  }
  return (
    <div>
      <AuthenticationPage />
    </div>
  );
}

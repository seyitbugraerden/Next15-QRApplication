import { Button } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default async function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center gap-6">
      <LoginLink>
        <Button variant={"default"}>Sign in</Button>
      </LoginLink>
      <RegisterLink>
        <Button variant={"outline"}>Sign up</Button>
      </RegisterLink>
    </div>
  );
}

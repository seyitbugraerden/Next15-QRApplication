import AuthenticationPage from "@/components/authentication";

export default async function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center gap-6">
      <AuthenticationPage />
    </div>
  );
}

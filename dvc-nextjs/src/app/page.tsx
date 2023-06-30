import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();

  return (
    <main>
      <div className=" text-center text-3xl m-4">Home page</div>
      <div>
        Hello {user?.firstName}
        <UserButton afterSignOutUrl="/" />
      </div>
    </main>
  );
}

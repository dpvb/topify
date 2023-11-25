import { SignOutButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <div className="flex items-center w-screen justify-evenly">
      <h1 className="text-5xl">
        <span className="text-primary-green">Top</span>ify
      </h1>
      <SignOutButton className="text-xl bg-primary-green py-1 px-2 rounded-md text-black" />
    </div>
  );
}

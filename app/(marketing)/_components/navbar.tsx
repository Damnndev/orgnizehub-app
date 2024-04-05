import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="flex fixed top-0 w-full h-14 px-4  bg-white items-center">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-center w-full md:justify-between">
        <Logo />
        <div className="hidden space-x-4 md:block md:w-auto w-full">
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in">Log in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/sign-up">Sign up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};


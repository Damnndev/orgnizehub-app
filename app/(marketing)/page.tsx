import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import illustration from "../../public/home-img.webp";
const headingFont = localFont({ src: "../../public/fonts/font.woff2" });
const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:grid md:grid-cols-2 items-center justify-center px-4 py-8 mx-auto max-w-7xl gap-4 md:gap-8">
      <Image
        alt="Home illustration"
        src={illustration}
        layout="responsive"
        width={4268}
        height={3200}
        objectFit="cover"
      />
      <div
        className={cn(
          "flex flex-col items-center space-y-4",
          headingFont.className
        )}
      >
        <h1 className="text-2xl sm:text-3xl text-center text-neutral-800">
          OrganizeHub helps to organize your tasks
        </h1>
        <div
          className={`text-sm text-center text-neutral-400 ${textFont.className}`}
        >
          Collaborate, manage projects, and reach new productivity peaks.
          Accomplish it all with OrganizeHub.
        </div>
        <div className="flex flex-col gap-y-2 md:flex-row md:items-center md:justify-center md:space-x-4 md:block md:w-auto w-full">
          <Button className="md:hidden" size="sm" variant="outline" asChild>
            <Link href="/sign-in">Log in</Link>
          </Button>
          <Button className="md:hidden" size="sm" asChild>
            <Link href="/sign-up">Sign up</Link>
          </Button>
          <Button variant="secondary" className="hidden md:flex mt-4" size="lg" asChild>
            <Link href="/sign-up"> Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MarketingPage;

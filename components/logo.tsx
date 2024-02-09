import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import  localFont  from "next/font/local";

const headingFont = localFont({ src: "../public/fonts/font.woff2" });

const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition justify-center items-center gap-x-2 hidden md:flex">
        <Image src="/logo.svg" alt="OrganizeHub logo" width={40} height={40} />
        <p
          className={cn("text-lg text-neutral-700", headingFont.className)}
        >
          OrganizeHub
        </p>
      </div>
    </Link>
  );
};
export default Logo;

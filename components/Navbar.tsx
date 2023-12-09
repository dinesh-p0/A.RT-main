"use client";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";

const Navbar = () => {
  const { isSignedIn } = useUser();

  return (
    <nav className="mb-10 flex w-full items-center justify-between pt-3">
      <Image
        src="/assets/logo.svg"
        alt="Sumz_logo"
        className="w-28 object-contain"
        width={7}
        height={7}
      />
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-10 text-lg font-[500] text-[#585858]">
          <a href="/">EDITH</a>
          <a href="/saturday">SATURDAY</a>
          <a href="/barf">BARF</a>
        </div>

        {isSignedIn ? (
          <div className="flex items-center gap-3 sm:gap-10">
            <UserButton
              afterSignOutUrl="/sign-in"
              appearance={{
                elements: {
                  avatarBox: "h-11 w-11",
                },
                variables: {
                  colorPrimary: "#ff7000",
                },
              }}
            />
          </div>
        ) : (
          <div className="black_btn text-xl underline">
            <a href="/sign-in">sign-in</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

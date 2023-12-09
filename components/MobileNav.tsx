"use client";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import { useState } from "react";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const [opened, setOpened] = useState(false);

  const changeNav = () => {
    console.log(opened);
    setOpened(!opened);
  };

  return (
    <nav className="relative mb-10 flex w-full items-center justify-between pt-3">
      <Image
        src="/assets/logo.svg"
        alt="Sumz_logo"
        className="w-28 object-contain"
        width={7}
        height={7}
      />
      <div className="flex w-full items-center justify-end gap-10">
        {/* <div className="flex items-center gap-10 text-lg font-[500] text-[#585858]">
          <a href="/">EDITH</a>
          <a href="/saturday">Saturday</a>
          <a href="/barf">BARF</a>
        </div> */}

        {isSignedIn ? (
          <div className="flex items-center sm:gap-10">
            <UserButton
              afterSignOutUrl="/sign-in"
              appearance={{
                elements: {
                  avatarBox: "h-7 w-7",
                },
                variables: {
                  colorPrimary: "#ff7000",
                },
              }}
            />
          </div>
        ) : (
          <div className="black_btn text-lg">
            <a href="/sign-in">sign-in</a>
          </div>
        )}

        <div className="z-[500] font-bold" onClick={changeNav}>
          Menu
        </div>

        <div
          className={`fixed top-0 z-[300] flex h-[100vh] w-[100%] flex-col items-center justify-center gap-10 bg-white text-center ${
            opened ? "right-0" : "right-[-100%]"
          } text-2xl font-[600] transition-all
          duration-700`}
        >
          <a href="/" onClick={() => setOpened(!opened)}>
            EDITH
          </a>
          <a href="/saturday" onClick={() => setOpened(!opened)}>
            Saturday
          </a>
          <a href="/barf" onClick={() => setOpened(!opened)}>
            BARF
          </a>
        </div>

        {/* <div
          className={`${
            dark ? "bg-[#1d2233] text-white" : "bg-white text-black"
          } fixed top-0 z-[300] flex h-[100vh] w-[100%] flex-col items-center justify-center gap-10 text-center ${
            opened ? "left-0" : "left-[-100%]"
          }  text-2xl font-[600] transition-all duration-700`}
        >
          <a
            onClick={() => setOpened(!opened)}
            href="#Home"
            className="cursor-pointer"
          >
            Home
          </a>
          <a
            onClick={() => setOpened(!opened)}
            href="#about"
            className="cursor-pointer"
          >
            About
          </a>
          <a
            onClick={() => setOpened(!opened)}
            href="#course"
            className="cursor-pointer"
          >
            Course
          </a>
          <a
            onClick={() => setOpened(!opened)}
            href="#speakers"
            className="cursor-pointer"
          >
            Speakers
          </a>
          <a
            onClick={() => setOpened(!opened)}
            href="#faqs"
            className="cursor-pointer"
          >
            FAQs
          </a>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;

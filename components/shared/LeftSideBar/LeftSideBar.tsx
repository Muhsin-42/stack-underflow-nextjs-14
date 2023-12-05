"use client";
import React from "react";
import { SIDEBAR_LINKS } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const LeftSideBar = () => {
  const pathName = usePathname();

  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 flex h-screen w-fit flex-col justify-between  overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div>
        {SIDEBAR_LINKS.map((item) => {
          const isSelected =
            (pathName.includes(item.route) && item.route.length > 1) ||
            pathName === item.route;
          return (
            <div key={item.route}>
              <Link
                href={item.route}
                className={`${
                  isSelected
                    ? "primary-gradient rounded-lg text-light-900"
                    : "text-dark300_light900"
                } flex items-center justify-start gap-4 bg-transparent p-4`}
              >
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  width={20}
                  height={20}
                  className={`${isSelected ? "" : "invert-colors"}`}
                />
                <p
                  className={`${
                    isSelected ? "base-bold" : "base-medium"
                  } hidden md:block`}
                >
                  {item.label}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
      <div>
        <SignedOut>
          <div className="flex flex-col gap-3">
            <Link href={"/sign-in"}>
              <Button className="small-medium btn-secondary  min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                <span className="primary-text-gradient hidden md:block">
                  Login
                </span>
                <Image
                  alt="Login"
                  src={"/assets/icons/account.svg"}
                  width={20}
                  height={20}
                  className="md:hidden"
                />
              </Button>
            </Link>
          </div>
        </SignedOut>
      </div>
    </section>
  );
};

export default LeftSideBar;

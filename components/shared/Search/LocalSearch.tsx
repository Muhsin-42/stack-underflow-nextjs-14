"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface ILocalStorage {
  route: string;
  iconPosition: string;
  className: string;
  imgSrc: string;
  placeholder: string;
}

const LocalSearch = ({
  route,
  iconPosition,
  className,
  imgSrc,
  placeholder,
}: ILocalStorage) => {
  const myClass = twMerge(
    "background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 w-full",
    className
  );

  return (
    <div className={myClass}>
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          alt="Search"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
      <Input
        type="text"
        placeholder={placeholder}
        className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none"
      />
      {iconPosition === "right" && (
        <Image
          src={imgSrc}
          alt="Search"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default LocalSearch;

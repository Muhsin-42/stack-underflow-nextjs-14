import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "../Tag/Tag";

const TOP_QUESTIONS = [
  "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
  "Is it only me or the font is bolder than necessary?",
];

const TAGS = ["react js", "next js", "node js", "python"];

const RightSideBar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      {/* Top Questions */}
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        {TOP_QUESTIONS?.map((question, index) => (
          <Link
            key={index}
            href={""}
            className="text-dark200_light900 my-5 flex"
          >
            <p className="body-medium text-dark500_light700">
              Best practices for data fetching in a Next.js application with
              Server-Side Rendering (SSR)?
            </p>
            <Image
              src={"/assets/icons/chevron-right.svg"}
              alt="arrow"
              width={20}
              height={20}
              className="invert-colors"
            />
          </Link>
        ))}
      </div>
      {/* Popular Tags */}
      <div>
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        {TAGS?.map((tag, index) => (
          <Link
            key={index}
            href={""}
            className="text-dark200_light900 my-5 flex justify-between"
          >
            <Tag tag={tag} caps={true} />
            <span className="small-medium text-dark500_light700">{23}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RightSideBar;

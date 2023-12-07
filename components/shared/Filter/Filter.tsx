"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  filters: {
    name: string;
    value: string;
  }[];
  className?: string;
  containerClassName?: string;
}

const Filter = ({ filters, className, containerClassName }: Props) => {
  const myClassName = twMerge(
    "body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5",
    className
  );
  const myContainerClassName = twMerge("relative", containerClassName);
  return (
    <div className={myContainerClassName}>
      <Select>
        <SelectTrigger className={myClassName}>
          <div className="line-clamp-1 flex-1 text-left">
            <SelectValue placeholder="Select a Filter" />
          </div>
        </SelectTrigger>
        <SelectContent className="text-dark100_light900 cursor-pointer">
          <SelectGroup>
            {filters?.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filter;

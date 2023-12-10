import { Badge } from "@/components/ui/badge";
import React from "react";

interface ITag {
  _id: string;
  name: string;
  caps?: boolean;
  totalQuestion?: number;
  showCount?: boolean;
}

const Tag = ({ _id, name, showCount, totalQuestion, caps }: ITag) => {
  return (
    <Badge
      className={`subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 ${
        caps ? "uppercase" : ""
      }`}
    >
      {name}
    </Badge>
  );
};

export default Tag;

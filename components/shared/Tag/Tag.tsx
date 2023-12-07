import { Badge } from "@/components/ui/badge";
import React from "react";

const Tag = ({ tag, caps }: { tag: string; caps: boolean }) => {
  return (
    <Badge
      className={`subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 ${
        caps ? "uppercase" : ""
      }`}
    >
      {tag}
    </Badge>
  );
};

export default Tag;

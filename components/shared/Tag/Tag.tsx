import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";

const Tag = ({ tag }: { tag: string }) => {
  return (
    <Link href={""} className="flex">
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
        Outline
      </Badge>
    </Link>
  );
};

export default Tag;

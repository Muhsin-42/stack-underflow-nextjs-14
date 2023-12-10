import Link from "next/link";
import React from "react";
import Tag from "../Tag/Tag";
import Metric from "../Metric";

interface IQuestionCard {
  _id: string;
  title: string;
  tags: { _id: string; name: string }[];
  author: { _id: string; name: string; picture: string };
  upvotes: number;
  views: number;
  answers: Array<object>;
  createdAt: Date;
}

const QuestionCard = ({
  _id,
  title,
  tags,
  author,
  upvotes,
  views,
  createdAt,
  answers,
}: IQuestionCard) => {
  console.log("createedAt ", createdAt);
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11 ">
      <div className="flex flex-col-reverse items-start justify-between gap-5">
        <div className="">
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {String(createdAt)}
          </span>
          <Link href={"/"}>
            <h3 className="base-semibold sm:h3-semibold text-dark200_light900 line-clamp-1">
              {title}
            </h3>
          </Link>
        </div>
        {/* If signed In user => Add edit delete actions */}
      </div>

      <div className="mt-2 flex flex-wrap gap-2">
        {tags?.map((tag, index) => (
          <Link
            key={index}
            href={""}
            className="text-dark200_light900 flex justify-between"
          >
            <Tag name={tag.name} _id={tag._id} caps={true} />
          </Link>
        ))}
      </div>

      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
          imgUrl={"/assets/icons/avatar.svg"}
          alt="user"
          value={author.name}
          title="  - asked 1 hour ago"
          href={`/profile/${author._id}`}
          isAuthor
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/like.svg"
          alt="upvotes"
          value={upvotes}
          title=" Votes"
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/message.svg"
          alt="message"
          value={answers?.length}
          title=" Answers"
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/eye.svg"
          alt="eye"
          value={views}
          title=" Views"
          textStyles="small-medium text-dark400_light800"
        />
      </div>
    </div>
  );
};

export default QuestionCard;

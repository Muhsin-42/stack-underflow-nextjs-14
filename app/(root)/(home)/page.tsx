import HomeFilters from "@/components/Home/HomeFilters";
import QuestionCard from "@/components/shared/QuestionCard.tsx/QuestionCard";
import Filter from "@/components/shared/Filter/Filter";
import LocalSearch from "@/components/shared/Search/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
import NoResult from "@/components/shared/NoResult";
const questions2 = [];
const questions = [
  {
    _id: 1,
    title: "Css not working why?",
    tags: [
      { _id: 1, name: "python" },
      { _id: 2, name: "sql" },
    ],
    author: "John Doe",
    upvotes: 10,
    views: 234,
    answers: 4,
    createdAt: "2021-09-01T12:00:000Z",
  },
  {
    _id: 2,
    title: "JavaScript function not returning expected output",
    tags: [
      { _id: 3, name: "javascript" },
      { _id: 4, name: "functions" },
    ],
    author: "Jane Smith",
    upvotes: 15,
    views: 189,
    answers: 6,
    createdAt: "2021-10-05T08:30:000Z",
  },
  {
    _id: 3,
    title: "Best practices for responsive web design?",
    tags: [
      { _id: 5, name: "html" },
      { _id: 6, name: "css" },
      { _id: 7, name: "responsive-design" },
    ],
    author: "Alice Johnson",
    upvotes: 20,
    views: 452,
    answers: 12,
    createdAt: "2021-11-15T17:45:000Z",
  },
  {
    _id: 4,
    title: "How to optimize SQL queries for faster performance?",
    tags: [
      { _id: 2, name: "sql" },
      { _id: 8, name: "optimization" },
    ],
    author: "Bob Anderson",
    upvotes: 8,
    views: 312,
    answers: 5,
    createdAt: "2022-01-07T10:15:000Z",
  },
  {
    _id: 5,
    title:
      "Python TypeError: unsupported operand type(s) for +: 'int' and 'str'",
    tags: [
      { _id: 1, name: "python" },
      { _id: 9, name: "errors" },
    ],
    author: "Eva Martinez",
    upvotes: 25,
    views: 521,
    answers: 8,
    createdAt: "2022-02-18T14:20:000Z",
  },
  {
    _id: 6,
    title: "Authentication issues with JWT tokens in Node.js",
    tags: [
      { _id: 10, name: "nodejs" },
      { _id: 11, name: "authentication" },
      { _id: 12, name: "jwt" },
    ],
    author: "Sam Wilson",
    upvotes: 18,
    views: 398,
    answers: 10,
    createdAt: "2022-03-25T09:55:000Z",
  },
  {
    _id: 7,
    title: "Handling large datasets efficiently in Pandas",
    tags: [
      { _id: 13, name: "python" },
      { _id: 14, name: "pandas" },
      { _id: 15, name: "data-handling" },
    ],
    author: "Sophia Brown",
    upvotes: 30,
    views: 732,
    answers: 15,
    createdAt: "2022-04-30T16:10:000Z",
  },
  {
    _id: 8,
    title: "How to deploy a React app to production?",
    tags: [
      { _id: 16, name: "react" },
      { _id: 17, name: "deployment" },
    ],
    author: "Michael Clark",
    upvotes: 12,
    views: 276,
    answers: 7,
    createdAt: "2022-06-09T11:40:000Z",
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href={"/ask-question"} className="flex justify-end">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex w-full justify-between gap-5 max-sm:flex-col sm:items-center md:flex-col">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions..."
          className={"flex-1"}
        />
        <Filter
          filters={HomePageFilters}
          className={"min-h-[56px] sm:min-w-[170px]"}
          containerClassName={"hidden max-md:flex"}
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions2?.length > 0 ? (
          questions?.map((question) => <QuestionCard key={question?._id} />)
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the silence! 🚀"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}

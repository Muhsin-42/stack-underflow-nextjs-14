import HomeFilters from "@/components/Home/HomeFilters";
import QuestionCard from "@/components/shared/QuestionCard.tsx/QuestionCard";
import Filter from "@/components/shared/Filter/Filter";
import LocalSearch from "@/components/shared/Search/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
import NoResult from "@/components/shared/NoResult";
const questions = [
  {
    _id: "1",
    title: "CSS not working, why?",
    tags: [
      { _id: "1", name: "CSS" },
      { _id: "2", name: "HTML" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      picture: "john_doe.jpg",
    },
    upvotes: 10,
    views: 234,
    answers: [],
    createdAt: new Date("September 1, 2021 12:00:00"),
  },
  {
    _id: "2",
    title: "JavaScript function not returning expected output",
    tags: [
      { _id: "3", name: "JavaScript" },
      { _id: "4", name: "Functions" },
    ],
    author: {
      _id: "2",
      name: "Jane Smith",
      picture: "jane_smith.jpg",
    },
    upvotes: 15,
    views: 189,
    answers: [],
    createdAt: new Date("October 5, 2021 08:30:00"),
  },
  {
    _id: "3",
    title: "Best practices for responsive web design?",
    tags: [
      { _id: "5", name: "HTML" },
      { _id: "6", name: "CSS" },
      { _id: "7", name: "Responsive Design" },
    ],
    author: {
      _id: "3",
      name: "Alice Johnson",
      picture: "alice_johnson.jpg",
    },
    upvotes: 20,
    views: 452,
    answers: [],
    createdAt: new Date("November 15, 2021 17:45:00"),
  },
  {
    _id: "4",
    title: "How to optimize SQL queries for faster performance?",
    tags: [
      { _id: "2", name: "SQL" },
      { _id: "8", name: "Optimization" },
    ],
    author: {
      _id: "4",
      name: "Bob Anderson",
      picture: "bob_anderson.jpg",
    },
    upvotes: 8,
    views: 312,
    answers: [],
    createdAt: new Date("January 7, 2022 10:15:00"),
  },
  {
    _id: "5",
    title:
      "Python TypeError: unsupported operand type(s) for +: 'int' and 'str'",
    tags: [
      { _id: "1", name: "Python" },
      { _id: "9", name: "Errors" },
    ],
    author: {
      _id: "5",
      name: "Eva Martinez",
      picture: "eva_martinez.jpg",
    },
    upvotes: 25,
    views: 521,
    answers: [],
    createdAt: new Date("February 18, 2022 14:20:00"),
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
        {questions?.length > 0 ? (
          questions?.map((question) => {
            console.log("question ", question.createdAt);
            return (
              <QuestionCard
                key={question?._id}
                _id={question._id}
                title={question.title}
                tags={question.tags}
                author={question.author}
                upvotes={question.upvotes}
                views={question.views}
                createdAt={question.createdAt}
                answers={question.answers}
              />
            );
          })
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

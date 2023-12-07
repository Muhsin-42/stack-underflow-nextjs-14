import HomeFilters from "@/components/Home/HomeFilters";
import Filter from "@/components/shared/Filter/Filter";
import LocalSearch from "@/components/shared/Search/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

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
    </>
  );
}

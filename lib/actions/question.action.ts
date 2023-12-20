"use server";

import Question from "@/database/question.model";
import { connectToDb } from "../mongoose";
import Tag from "@/database/tag.model";
import { CreateQuestionParams, GetQuestionsParams } from "./shared.types";
import User from "@/database/user.model";
import { revalidatePath } from "next/cache";

export async function createQuestion(params: CreateQuestionParams) {
  try {
    connectToDb();

    const { title, content, tags, author, path } = params;
    // create the question;
    const question = await Question.create({
      title,
      content,
      author,
    });
    const tagDocuments = [];
    for (const tag of tags) {
      console.log("tag ", tag);
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}`, "i") } },
        { $setOnInsert: { name: tag }, $push: { questions: question._id } },
        { upsert: true, new: true }
      );

      tagDocuments.push(existingTag._id);
    }
    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagDocuments } },
    });

    revalidatePath(path);
  } catch (error) {
    console.log("CREATE QUESTION ERROR :: ", error);
  }
}

export async function getQuestions(params: GetQuestionsParams) {
  // const { filter, page, pageSize, searchQuery } = params;
  try {
    connectToDb();

    const questions = await Question.find()
      .populate({ path: "author", model: User })
      .populate({ path: "tags", model: Tag })
      .sort({ createdAt: -1 });
    return { questions };
  } catch (error) {
    console.log("getQuestion Error:: ", error);
  }
}

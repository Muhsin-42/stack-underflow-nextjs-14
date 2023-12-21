"use server";

import User from "@/database/user.model";
import { connectToDb } from "../mongoose";
import {
  CreateUserParams,
  DeleteUserParams,
  UpdateUserParams,
} from "./shared.types";
import { revalidatePath } from "next/cache";
import Question from "@/database/question.model";

export async function getUserById(params: any) {
  try {
    connectToDb();

    const { userId } = params;

    const user = await User.findOne({ clerkId: userId });
    return user;
  } catch (error) {
    console.log("error ", error);
  }
}

export async function createUser(userData: CreateUserParams) {
  try {
    connectToDb();

    const newUser = await User.create(userData);

    return newUser;
  } catch (error) {
    console.log("create error ", error);
  }
}

export async function updateUser(userData: UpdateUserParams) {
  try {
    connectToDb();

    await User.findOneAndUpdate({ clerkId: userData.clerkId }, userData, {
      new: true,
    });
    revalidatePath(userData.path);
  } catch (error) {
    console.log("UPDATE USER ERROR:: ", error);
  }
}

export async function deleteUser(params: DeleteUserParams) {
  try {
    connectToDb();
    const { clerkId } = params;
    const user = await User.findOne({ clerkId });
    if (!user) {
      throw new Error("User not found");
    }

    // get user question ids
    // const userQuestionIds = await Question.find({author: user._id}).distinct('_id');

    // delete user question
    await Question.deleteMany({ author: user._id });

    const deletedUser = await User.findByIdAndUpdate(user._id);

    return deletedUser;
  } catch (error) {
    console.log("DELETE USER ERROR :: ", error);
  }
}

import * as z from "zod";

export const QuestionSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title must be at least 5 characters" })
    .max(130, { message: "Title must be at less than 130 characters" }),
  explanation: z
    .string()
    .min(20, { message: "Description must be at least 20 characters" })
    .max(5000, { message: "Description must be at less than 5000 characters" }),
  tags: z.array(z.string().min(1).max(15)).min(1).max(3),
});

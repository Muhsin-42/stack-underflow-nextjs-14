"use server";
// "use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { QuestionSchema } from "@/lib/validations";
import { Editor } from "@tinymce/tinymce-react";
import React, { useReducer, useRef } from "react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { createQuestion } from "@/lib/actions/question.action";
const type: any = "create";
type TState = {
  isSubmit: boolean;
};

type TAction = { type: "TOGGLE_LOADING"; payload: boolean };

const initialState = {
  isSubmit: false,
};

const reducer = (state: TState, action: TAction) => {
  switch (action.type) {
    case "TOGGLE_LOADING":
      return { ...state, isSubmit: action.payload };
    default:
      return state;
  }
};

export default function Question() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const editorRef = useRef<Editor | null>(null);

  const form = useForm<z.infer<typeof QuestionSchema>>({
    resolver: zodResolver(QuestionSchema),
    defaultValues: {
      title: "",
      explanation: "",
      tags: [],
    },
  });

  async function onSubmit(values: z.infer<typeof QuestionSchema>) {
    dispatch({ type: "TOGGLE_LOADING", payload: true });
    try {
      await createQuestion({});
    } catch (error) {
    } finally {
      dispatch({ type: "TOGGLE_LOADING", payload: false });
    }
    console.log(values);
  }
  const handleInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: any
  ) => {
    if (e.key === "Enter" && field.name === "tags") {
      console.log("fieldva", field.value);
      e.preventDefault();

      if (field.value?.length >= 3) {
        return form.setError("tags", {
          type: "required",
          message: "Only upto 3 tags can be added.",
        });
      }

      const tagInput = e.target as HTMLInputElement;
      const tagValue = tagInput.value.trim();

      if (tagValue !== "") {
        if (tagValue.length > 15) {
          return form.setError("tags", {
            type: "required",
            message: "Tag must be less than 15 characters",
          });
        }
        if (!field.value.includes(tagValue as never)) {
          form.setValue("tags", [...field.value, tagValue]);
          tagInput.value = "";
          form.clearErrors("tags");
        } else {
          form.trigger();
        }
      }
    }
  };

  const handleTagRemove = (tag: any, field: any) => {
    const newTags = field.value.filter((t: string) => t !== tag);
    form.setValue("tags", newTags);
  };

  console.log("redd ", form.getValues());
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-10"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Question Title
                <span className="text-primary-500"> * </span>
              </FormLabel>
              <FormControl className="mt-2.5">
                <Input
                  placeholder="Enter Title"
                  {...field}
                  className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                />
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Be specific and concise.
              </FormDescription>
              <FormMessage color="#ffff" className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="explanation"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Detailed explanation of your problem.
                <span className="text-primary-500"> * </span>
              </FormLabel>
              <FormControl className="mt-2.5">
                {/* TODO: aDD AN EDITOR */}
                <Editor
                  apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
                  onInit={(evt, editor) =>
                    // @ts-ignore
                    (editorRef.current = editor)
                  }
                  onBlur={field.onBlur}
                  onEditorChange={(content) => field.onChange(content)}
                  initialValue="dfg"
                  init={{
                    height: 350,
                    menubar: false,
                    plugins: [
                      "advlist",
                      "anchor",
                      "autolink",
                      "image",
                      "link",
                      "lists",
                      "searchreplace",
                      "table",
                      "wordcount",
                      "codesample",
                    ],
                    toolbar:
                      "undo redo | blocks | " +
                      "codesample | bold italic forecolor | alignleft aligncenter | " +
                      "alignright alignjustify | bullist numlist ",
                    content_style:
                      "body { font-family:Interserif; font-size:16px }",
                  }}
                />
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Explain the problem and expand on what you put in the title.
                Minimum 25 characters.
              </FormDescription>
              <FormMessage color="#ffff" className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Question Title
                <span className="text-primary-500"> * </span>
              </FormLabel>
              <FormControl className="mt-2.5">
                <>
                  <Input
                    placeholder="Add Tags"
                    className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                    onKeyDown={(e) => handleInputKeyDown(e, field)}
                  />
                  {field.value.length > 0 && (
                    <div className="flex-start mt-2.5 gap-2.5">
                      {field.value.map((tag: any) => (
                        <Badge
                          key={tag}
                          className="subtle-medium background-light800_dark300 text-light400_light500 flex items-center justify-center gap-2 rounded-md border-none px-4 py-2 capitalize"
                        >
                          {tag}
                          <Image
                            src={"/assets/icons/close.svg"}
                            alt="Close Icon"
                            width={12}
                            height={12}
                            onClick={() => handleTagRemove(tag, field)}
                            className="cursor-pointer object-contain invert-0 dark:invert"
                          />
                        </Badge>
                      ))}
                    </div>
                  )}
                </>
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Add upto 3 relevant tags.
              </FormDescription>
              <FormMessage color="#ffff" className="text-red-500" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="primary-gradient w-fit !text-light-900"
          disabled={state.isSubmit}
        >
          {state.isSubmit ? (
            <>{type === "edit" ? "Editing..." : "Posting..."}</>
          ) : (
            <>{type === "edit" ? "Edit Question" : "Post Question"}</>
          )}
        </Button>
      </form>
    </Form>
  );
}

"use client";

import React from "react";
import { addTweet } from "../(contents)/actions";
import { useFormState } from "react-dom";
import FormBtn from "./form-btn";

export default function AddTweet() {
  const [state, action] = useFormState(addTweet, null);
  const errors = state?.fieldErrors.tweet;

  return (
    <form className="flex flex-col gap-2" action={action}>
      <textarea
        name="tweet"
        placeholder="How are you feeling today?"
        maxLength={110}
        required
        className="px-4 py-3 placeholder:text-slate-400 bg-transparent rounded-xl w-full h-24 focus:outline-none ring-2 transition ring-rose-200 focus:ring-4 border-none resize-none"
      ></textarea>
      {errors?.map((error, index) => (
        <span key={index} className="text-red-600">
          {error}
        </span>
      ))}
      <FormBtn text="Post Tweet" />
    </form>
  );
}

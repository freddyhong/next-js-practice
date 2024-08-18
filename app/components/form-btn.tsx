"use client";

import { useFormStatus } from "react-dom";

interface IFormBtn {
  text: string;
}

export default function FormBtn({ text }: IFormBtn) {
  const { pending } = useFormStatus();
  console.log(pending);
  return (
    <button
      disabled={pending}
      className=" disabled:bg-neutral-200 disabled:cursor-not-allowed  w-96 py-3 text-center rounded-full bg-red-200 font-medium hover:bg-red-300 transition-all active:bg-red-400"
    >
      {pending ? "loading..." : text}
    </button>
  );
}

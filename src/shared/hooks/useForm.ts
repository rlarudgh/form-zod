import { ChangeEvent, FormEvent, useState } from "react";
import { z } from "zod";

export const useForm = <T>(initial: T) => {
  const [formState, setFormState] = useState<T>(initial);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;

    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = <T extends z.ZodRawShape>(e: FormEvent<HTMLFormElement>, schema: T extends z.ZodEffects<z.ZodObject<T, any, any>>) => {
    console.log(e, schema);
  };

  return { formState, handleChange, handleSubmit };
};

import { ChangeEvent, useState } from "react";

export const useForm = <T>(initial: T) => {
  const [formState, setFormState] = useState<T>(initial);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;

    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {};

  return { formState, handleChange, handleSubmit };
};

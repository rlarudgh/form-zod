import { IInput } from "./Input.types";

export const Input = (props: IInput) => {
  return <input {...props} autoComplete="off" />;
};

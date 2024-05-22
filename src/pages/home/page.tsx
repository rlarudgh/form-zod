import { useForm } from "@/shared/hooks/useForm";
import { Input } from "@/shared/ui";
import { RegisterType } from "@/shared/models";

export const Home = () => {
  const { formState, handleChange, handleSubmit } = useForm<RegisterType>({
    email: "",
    userId: "",
    password: "",
    passwordCheck: "",
    agree: "",
  });

  return (
    <form
      style={{ display: "flex", flexDirection: "column", width: "200px" }}
      onSubmit={handleSubmit}
    >
      <Input
        value={formState.email}
        name="email"
        type="email"
        placeholder="이메일을 입력하세요"
        onChange={handleChange}
      />
      <Input
        value={formState.userId}
        name="userId"
        type="text"
        placeholder="id를 입력하세요."
        onChange={handleChange}
      />
      <Input
        value={formState.password}
        name="password"
        type="password"
        placeholder="비밀번호를 입력하세요"
        onChange={handleChange}
      />
      <Input
        value={formState.passwordCheck}
        name="passwordCheck"
        type="password"
        placeholder="비밀번호를 다시 입력해주세요."
        onChange={handleChange}
      />
      <Input />
    </form>
  );
};

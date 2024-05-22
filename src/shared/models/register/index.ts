import { registerSchema } from "@/shared/libs";
import { z } from "zod";

export type RegisterType = z.infer<typeof registerSchema>;

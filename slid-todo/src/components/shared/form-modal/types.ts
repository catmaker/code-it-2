import { z } from "zod";

export const schema = z.object({
  title: z
    .string()
    .min(1, { message: "제목은 필수입니다." })
    .max(30, { message: "제목은 최대 30자입니다." }),
  description: z.string().optional(),
  done: z.boolean().default(false),
  file: z.string().optional(),
  link: z.string().optional(),
  goal: z
    .object({
      id: z.number(),
      title: z.string(),
    })
    .optional(),
});

export type FormSchema = z.infer<typeof schema>;
export type ModalType = "todo" | "note";
export type ModalMode = "create" | "edit";
export type ActiveField = "file" | "link" | null;
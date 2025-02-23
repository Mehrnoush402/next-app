import { z } from "zod";

export const SignupFormSchema = z.object({
  firstName: z.string().min(2, { message: "حداقل ۲ کارکتر وارد کنید" }).trim(),
  lastName: z.string().min(2, { message: "حداقل ۲ کارکتر وارد کنید" }).trim(),
  email: z.string().email({ message: "لطفا ایمیل معتبری وارد کنید" }).trim(),
  password: z
    .string()
    .min(8, { message: "حداقل ۸ کارکتر" })
    .regex(/[a-zA-Z]/, { message: "حداقل شامل یک حرف باشد" })
    .regex(/[0-9]/, { message: "حداقل شامل یک عدد باشد" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "حداقل شامی یک کارکتر خاص باشد",
    }),
});

export const LoginFormSchema = z.object({
  email: z.string().email({ message: "لطفا ایمیل معتبری وارد کنید" }).trim(),
  password: z.string(),
});

export type RegisterFormState =
  | {
      errors?: {
        firstName?: string[];
        lastName?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export type LoginFormState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

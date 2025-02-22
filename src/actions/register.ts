"use server";
import "server-only";

import { RegisterFormState, SignupFormSchema } from "@/lib/validation";
import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";


// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const BASE_URL = process.env.BASE_URL;
export async function register(state: RegisterFormState, formData: FormData) {
  // Validate form fields

  const validatedFields = SignupFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: "post",
      body: JSON.stringify(validatedFields?.data),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    if (!res.ok) {
      return {
        message: data?.message,
        errors: data?.errors,
      };
    } else {
      await createSession({
        accesToken: data?.accessToken,
        refreshToken: data?.refreshToken,
      });
      redirect("/dashboard");
    }
  } catch (error) {
    console.error(error);
    return {
      message: "Register Failed.",
    };
  }
}

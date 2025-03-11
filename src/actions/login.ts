"use server";
import "server-only";

import { LoginFormSchema, LoginFormState } from "@/lib/validation";
import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { AUTH_BASE_URL } from "@/config.server";

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function login(state: LoginFormState, formData: FormData) {
  // Validate form fields

  const validatedFields = LoginFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const res = await fetch(`${AUTH_BASE_URL}/auth/login`, {
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
      accessToken: data?.tokens?.accessToken,
      refreshToken: data?.tokens?.refreshToken,
    });
    redirect("/dashboard");
  }
}

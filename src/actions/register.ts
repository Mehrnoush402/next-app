import { RegisterFormState, SignupFormSchema } from "@/lib/validation";

export async function register( state: RegisterFormState, formData: FormData ) {
  // Validate form fields
  

   const validatedFields = SignupFormSchema.safeParse(
    Object.fromEntries(formData.entries())
)
 
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
}
    

































































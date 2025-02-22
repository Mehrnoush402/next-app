import { RegisterFormState, SignupFormSchema } from "@/lib/validation";
import { json } from "stream/consumers";

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

  try {
    const res =await fetch("http://localhost:8000/auth/register",{
      method:"POST",
      body:JSON.stringify(validatedFields?.data),
      headers:{
        "Content-type":"application/json"
      }
    })
    const data=await res.json()
    if (!res.ok) {
      return {
        message: data?.message,
        errors: data?.errors,
      };
      
    } else {
      
    }
    
  } catch (error) {
    console.error(error);
    return {
      message: "Register Failed.",
      
    };
    
  }
}
    

































































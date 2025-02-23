import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createSession } from "./lib/session";

// 1. Specify protected and public routes
const protectedRoutes = "/dashboard";
const publicRoutes = "/";

export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = path.startsWith(protectedRoutes);
  const isPublicRoute = path.includes(publicRoutes);

  // 3. Decrypt the session from the cookie
  const accessToken = (await cookies()).get("accessToken")?.value;
  const refreshToken = (await cookies()).get("refreshToken")?.value;

  const isLogin = accessToken && refreshToken;
  const isLogout= !accessToken && !refreshToken;
  const needToRefresh = !accessToken && refreshToken;
  const BASE_URL = process.env.BASE_URL;

  // 4. Redirect to /login if the user is not authenticated
  //اگه توی داشببورد رفت و  توکن نداشت هدایتش کن به لاگین
  if (needToRefresh) {
    try {
       const res = await fetch(`${BASE_URL}/auth/refresh`, {
         method: "post",
         body: JSON.stringify({ refreshToken: refreshToken }),
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
                accessToken: data?.accessToken,
                refreshToken: data?.refreshToken,
              });
              return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
            }
    } catch (error) {
      console.log(error)
    }
 

  }
  
  if (isProtectedRoute && isLogout) {
    return NextResponse.redirect(new URL("/auth/login", req.nextUrl));
  }

  // 5. Redirect to /dashboard if the user is authenticated
  //اگه توی صفحه / بود و توکن هم داشت یعنی لاگین شده بود هدایتش کن بره به صفحه  داشبورد
  if (isPublicRoute && !isProtectedRoute && isLogin) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
// داره میگه سر صفحات استاتیک و صفحات که ریکووست داره میزنه اعمال نشو

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

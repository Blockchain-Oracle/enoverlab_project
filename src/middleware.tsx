import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and static files (images, fonts, etc.)
    '/((?!_next|static|favicon.ico).*)', 
    
    // Always apply middleware to API routes
    '/(api|trpc)(.*)',
  ],
};
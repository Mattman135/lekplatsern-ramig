// Middleware disabled - no auth needed
// If you need middleware in the future, uncomment and add your logic here

export default function middleware(req) {
  // Your custom middleware logic goes here if needed
}

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
} 
export { default } from "next-auth/middleware"

export const config = {
    matcher: [
        '/session' //define routes that need to be protected 
    ],
    pages: {
        signIn: '/api/auth/signin'
    }
}
export const config = { matcher: ["/dashboard/galery", "/dashboard", "/dashboard/galery/update-image"] }
import { withAuth } from "next-auth/middleware";
import {  NextResponse } from "next/server";


export default withAuth(
    function middleware(request) {

        if(request.nextUrl.pathname.endsWith('/dashboard', )) {
            if(request.nextauth.token) {
                return NextResponse.redirect(new URL('/dashboard/galery', request.url))
            }
            if(request.nextauth.token == null) {
                return NextResponse.redirect(new URL('/', request.url))
            }
            
        }
    }
)



import { NextRequest, NextResponse } from 'next/server';

export {NextRequest, NextResponse} from 'next/server'

export function middleware(req:NextRequest) {
    console.log("Request", req.nextUrl.pathname)
    return NextResponse.next()
}


//middlewarwe only runs in the package starts in '/'

// export function middleware(req:NextRequest) {
//     if(req.nextUrl.pathname.startsWith('/')){
//       console.log("Request", req.nextUrl.pathname)
//     return NextResponse.next()  
//     }
    
// }


//middlewarwe only runs in the home page

export const config = {
    matcher: '/'
}
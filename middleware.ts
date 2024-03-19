import { NextRequest, NextResponse } from 'next/server';

export {NextRequest, NextResponse} from 'next/server'

export function middleware(req:NextRequest) {
    console.log("Request", req.nextUrl.pathname)
    return NextResponse.next()
}
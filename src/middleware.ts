import createMiddleware from 'next-intl/middleware'
import {routing} from './routing'
import {NextRequest, NextResponse} from 'next/server'

const intlMiddleware = createMiddleware(routing)

export default function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/studio')) {
    return NextResponse.next()
  }
  return intlMiddleware(request)
}

export const config = {
  matcher: [
    '/',
    '/(vi|en)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ]
}

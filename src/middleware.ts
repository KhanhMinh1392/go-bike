import { NextRequest, NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const headers = { 'accept-language': 'en,en;q=0.5' };
const languages = new Negotiator({ headers }).languages();
const locales = ['en', 'vi'];
const defaultLocale = 'en';

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const cookies = request.cookies.get('token');

  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);
  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  if (cookies?.value !== "") {
    return NextResponse.redirect(request.nextUrl);
  }
  console.log("dda ve")
  return NextResponse.redirect(request.nextUrl + '/sign-in');
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    '/'
  ],
};

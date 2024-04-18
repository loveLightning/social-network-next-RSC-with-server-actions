import createMiddleware from 'next-intl/middleware'
import { localePrefix, locales } from './navigation'

export { auth as middleware } from '@/configs/auth.config'

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale: 'ru',
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ru|en)/:path*'],
}

import { MainLayout } from '@/layouts/main-layout'
import { locales } from '@/navigation'
import { Providers } from '@/providers/providers'
import '@/styles/global.scss'
import { ColorSchemeScript } from '@mantine/core'
import '@mantine/core/styles.css'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { Roboto } from 'next/font/google'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  params: { locale: string }
}

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'LocaleLayout' })

  return {
    title: t('title'),
    descriptin: t('description'),
  }
}

export default function LocaleLayout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale)

  return (
    <html lang={locale} className={roboto.className}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <Providers locale={locale}>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  )
}

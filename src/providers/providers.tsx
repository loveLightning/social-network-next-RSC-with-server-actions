import '@mantine/core/styles.css'
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

import { MantineProvider } from '@mantine/core'
import { NextIntlClientProvider, useMessages } from 'next-intl'

type Props = {
  children: ReactNode
  locale: string
}

export const Providers = ({ children, locale }: Props) => {
  const messages = useMessages()

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <SessionProvider>
        <MantineProvider>{children}</MantineProvider>
      </SessionProvider>
    </NextIntlClientProvider>
  )
}

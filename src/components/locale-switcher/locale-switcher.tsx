'use client'
import { locales, useRouter } from '@/navigation'
import { Select } from '@mantine/core'
import { useLocale } from 'next-intl'
import { useTransition } from 'react'

export default function LocaleSwitcher() {
  const router = useRouter()
  const locale = useLocale()
  const [isPending, startTransition] = useTransition()

  const onLocaleChange = (value: string | null) => {
    startTransition(() => {
      if (value) {
        router.replace('/', { locale: value })
      }
    })
  }

  return (
    <Select
      data={locales}
      value={locale ? locale : null}
      onChange={(value) => onLocaleChange(value)}
      disabled={isPending}
    />
  )
}

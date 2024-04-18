'use client'

import { NavLink } from '@mantine/core'
import { useLocale, useTranslations } from 'next-intl'
import { useState } from 'react'

export const Sidebar = () => {
  const t = useTranslations('SidebarData')
  const locale = useLocale()

  const [active, setActive] = useState(0)

  return (
    <div>
      <ul>
        {['my-profile', 'messages', 'friends', 'communities'].map(
          (el, index) => (
            <li key={el}>
              <NavLink
                href={`${locale}/${t(`${el}.link`)}`}
                active={index === active}
                label={t(`${el}.title`)}
                onClick={() => setActive(index)}></NavLink>
            </li>
          ),
        )}
      </ul>
    </div>
  )
}

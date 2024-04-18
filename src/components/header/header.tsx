'use client'

import { Link } from '@/navigation'
import { pageRoutes } from '@/utils/routes'
import Image from 'next/image'
import LocaleSwitcher from '../locale-switcher/locale-switcher'
import s from './header.module.scss'

// const data = [
//   { label: 'Home' },
//   { label: ' Explore' },
//   { label: 'Profile' },
//   { label: 'Notifications' },
// ]

export const Header = () => {
  const profileImg = false

  return (
    <header className={`${s.header}`}>
      <div className="container">
        <div className={s.content}>
          <Link className={s.logo} href="/" passHref>
            MySocial
          </Link>

          {/* <nav className={s.navigation}>
            <ul className={s['navigation-ul']}>
              {data.map((el, index) => (
                <li key={el.label}>
                  <NavLink
                    active={index === active}
                    label={el.label}
                    onClick={() => setActive(index)}
                  />
                </li>
              ))}
            </ul>
          </nav> */}

          <div className={s.switcher}>
            <LocaleSwitcher />

            <Link href={pageRoutes.settings} className={s['profile-pic']}>
              {profileImg ? (
                <Image
                  priority={true}
                  src="/profile.jpg"
                  className={s['profile-img']}
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
              ) : (
                <div className={s['profile-pic-not']}></div>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

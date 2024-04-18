import { Header } from '@/components/header/header'
import { Sidebar } from '@/components/sidebar/sidebar'
import s from './main-layout.module.scss'

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />

      <div className={s.content}>
        <Sidebar />
        {children}
      </div>
    </>
  )
}

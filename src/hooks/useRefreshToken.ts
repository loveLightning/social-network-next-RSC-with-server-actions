'use client'

import { axiosBase } from '@/axios/instance'
import { signIn, useSession } from 'next-auth/react'

export const useRefreshToken = () => {
  const { data: session } = useSession()

  const refreshToken = async () => {
    const res = await axiosBase.post('/auth/refresh', {
      refresh: session?.user?.refreshToken as string,
    })

    if (session) session.user.accessToken = res.data.accessToken
    else signIn()
  }
  return refreshToken
}

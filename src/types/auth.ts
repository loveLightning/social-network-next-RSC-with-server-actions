export interface AuthRegister {
  fullname: string
  email: string
  password: string
}

export type AuthLogin = Omit<AuthRegister, 'fullname'>

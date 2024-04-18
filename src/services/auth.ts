import { BaseService } from '@/axios/instance'
import { ApiMethods, AuthLogin, AuthRegister } from '@/types'

export class AuthService extends BaseService {
  public static async checkAuth() {
    return await this.fetch({
      url: ApiMethods.Refresh,
      method: 'GET',
    })
  }

  public static async register(data: AuthRegister) {
    return await this.fetch({
      url: ApiMethods.Signup,
      method: 'POST',
      data,
    })
  }

  public static async login(data: AuthLogin) {
    return await this.fetch({
      url: ApiMethods.Refresh,
      method: 'POST',
      data,
    })
  }

  public static async logout() {
    return await this.fetch({
      url: ApiMethods.Logout,
      method: 'POST',
    })
  }
}

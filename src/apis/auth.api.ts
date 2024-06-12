import http from 'src/config/https'
import path from 'src/constants/path'

export const Auth = {
  login(body: { username: string; password: string; company_id: number }) {
    return http.post('/login', body)
  },
  Forgotpassword(body: { email: string }) {
    return http.post('/forgot-password', body)
  }
}

import http from 'src/config/https'

export const employee = {
  getEmployee() {
    return http.get('/employee')
  }
}

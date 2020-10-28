import mock from '../utils/mock'

mock.onPost('/api/home/login').reply((config) => {
  const { email, password } = JSON.parse(config.data)

  if (email !== 'admin@admin.com' || password !== '123123') {
    return [400, { message: 'E-mail ou senha inválido!' }]
  }

  const user = {
    id: 1,
    name: 'Admin Admin',
    username: 'admin',
    email: 'admin@admin.com',
  }

  return [200, { user }]
})

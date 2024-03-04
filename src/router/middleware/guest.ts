//guest.ts проверяет, прошел ли аутентификацию пользователь. Если он аутентифицирован, он перенаправляется на маршрут к dashboard.
import { UnionMiddlewareContext } from '../routes'

export default function guest(options: UnionMiddlewareContext) {
  const { next, store, nextMiddleware } = options
  if (!store.getters.auth.loggedIn) {
    return next({
      name: 'dashboard',
    })
  }
  return nextMiddleware()
}

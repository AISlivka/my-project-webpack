// isSubscribeed.ts проверяется, подписан ли пользователь. Если пользователь подписан, он может получить доступ к намеченному маршруту или же перенаправлен обратно на страницу панели мониторинга.
import { UnionMiddlewareContext } from '../routes'

export default function isSubscribed(options: UnionMiddlewareContext) {
  const { next, useCounterStore, nextMiddleware } = options
  if (!useCounterStore.getters.auth.isSubscribed) {
    return next({
      name: 'dashboard',
    })
  }
  return nextMiddleware()
}

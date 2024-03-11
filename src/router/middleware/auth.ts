// // auth.ts используя хранилище, проверяет, аутентифицирован ли пользователь в данный момент. В зависимости от того, вошел ли пользователь в систему или нет, мы либо продолжим выполнение запроса, либо перенаправим его на страницу входа.

// import { UnionMiddlewareContext } from '../routes'

// export default function auth(options: UnionMiddlewareContext) {
//   const { next, useCounterStore, nextMiddleware } = options
//   if (!useCounterStore.getters.auth.loggedIn) {
//     return next({
//       name: 'login',
//     })
//   }
//   return nextMiddleware()
// }

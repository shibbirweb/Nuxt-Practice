export default function (context) {
  console.log('[Middleware] check auth')
  const req = process.client ? null : context.req
  context.store.dispatch('initAuth', req)

}

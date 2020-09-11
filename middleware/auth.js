export default function (context){
  if (! context.store.getters.isAuthenticated){
    console.log('[Middleware] check auth')

    context.redirect('/admin/auth')
  }
}

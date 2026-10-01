/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'

router.get('/', () => {
  return { hello: 'world' }
})

router
  .group(() => {
    router
      .group(() => {
        router.post('signup', [controllers.NewAccount, 'store'])
        router.post('login', [controllers.AccessTokens, 'store'])
      })
      .prefix('auth')
      .as('auth')

    router
      .group(() => {
        router.get('profile', [controllers.Profile, 'show'])
        router.post('logout', [controllers.AccessTokens, 'destroy'])
        router.get('tasks', [controllers.Tasks, 'showAll'])
        router.get('tasks/:id', [controllers.Tasks, 'show'])
        router.post('tasks', [controllers.Tasks, 'store'])
        router.patch('tasks/:id', [controllers.Tasks, 'patch'])
        router.delete('tasks/:id', [controllers.Tasks, 'delete'])
      })
      .prefix('account')
      .as('profile')
      .use(middleware.auth())
  })

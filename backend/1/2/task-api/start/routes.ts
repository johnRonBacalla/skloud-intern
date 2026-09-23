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
import TasksController from '#controllers/tasks_controller'

router.get('/', () => {
  return { hello: 'world' }
})

router.post('/tasks', [TasksController, 'store'])

router.get('/tasks', [TasksController, 'showAll'])

router.get('/tasks/:id', [TasksController, 'show'])

router.delete('/tasks/:id', [TasksController, 'delete'])

router.patch('/tasks/:id', [TasksController, 'patch'])


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
      })
      .prefix('account')
      .as('profile')
      .use(middleware.auth())
  })
  .prefix('/api/v1')

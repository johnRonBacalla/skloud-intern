/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'auth.new_account.store': {
    methods: ["POST"],
    pattern: '/auth/signup',
    tokens: [{"old":"/auth/signup","type":0,"val":"auth","end":""},{"old":"/auth/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['auth.new_account.store']['types'],
  },
  'auth.access_tokens.store': {
    methods: ["POST"],
    pattern: '/auth/login',
    tokens: [{"old":"/auth/login","type":0,"val":"auth","end":""},{"old":"/auth/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['auth.access_tokens.store']['types'],
  },
  'profile.profile.show': {
    methods: ["GET","HEAD"],
    pattern: '/account/profile',
    tokens: [{"old":"/account/profile","type":0,"val":"account","end":""},{"old":"/account/profile","type":0,"val":"profile","end":""}],
    types: placeholder as Registry['profile.profile.show']['types'],
  },
  'profile.access_tokens.destroy': {
    methods: ["POST"],
    pattern: '/account/logout',
    tokens: [{"old":"/account/logout","type":0,"val":"account","end":""},{"old":"/account/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['profile.access_tokens.destroy']['types'],
  },
  'profile.tasks.show_all': {
    methods: ["GET","HEAD"],
    pattern: '/account/tasks',
    tokens: [{"old":"/account/tasks","type":0,"val":"account","end":""},{"old":"/account/tasks","type":0,"val":"tasks","end":""}],
    types: placeholder as Registry['profile.tasks.show_all']['types'],
  },
  'profile.tasks.show': {
    methods: ["GET","HEAD"],
    pattern: '/account/tasks/:id',
    tokens: [{"old":"/account/tasks/:id","type":0,"val":"account","end":""},{"old":"/account/tasks/:id","type":0,"val":"tasks","end":""},{"old":"/account/tasks/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['profile.tasks.show']['types'],
  },
  'profile.tasks.store': {
    methods: ["POST"],
    pattern: '/account/tasks',
    tokens: [{"old":"/account/tasks","type":0,"val":"account","end":""},{"old":"/account/tasks","type":0,"val":"tasks","end":""}],
    types: placeholder as Registry['profile.tasks.store']['types'],
  },
  'profile.tasks.patch': {
    methods: ["PATCH"],
    pattern: '/account/tasks/:id',
    tokens: [{"old":"/account/tasks/:id","type":0,"val":"account","end":""},{"old":"/account/tasks/:id","type":0,"val":"tasks","end":""},{"old":"/account/tasks/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['profile.tasks.patch']['types'],
  },
  'profile.tasks.delete': {
    methods: ["DELETE"],
    pattern: '/account/tasks/:id',
    tokens: [{"old":"/account/tasks/:id","type":0,"val":"account","end":""},{"old":"/account/tasks/:id","type":0,"val":"tasks","end":""},{"old":"/account/tasks/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['profile.tasks.delete']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}

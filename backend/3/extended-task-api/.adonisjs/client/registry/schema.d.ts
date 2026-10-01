/* eslint-disable prettier/prettier */
/// <reference path="../manifest.d.ts" />

import type { ExtractBody, ExtractErrorResponse, ExtractQuery, ExtractQueryForGet, ExtractResponse } from '@tuyau/core/types'
import type { InferInput, SimpleError } from '@vinejs/vine/types'

export type ParamValue = string | number | bigint | boolean

export interface Registry {
  'auth.new_account.store': {
    methods: ["POST"]
    pattern: '/auth/signup'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').signupValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/user').signupValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/new_account_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/new_account_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'auth.access_tokens.store': {
    methods: ["POST"]
    pattern: '/auth/login'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').loginValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/user').loginValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'profile.profile.show': {
    methods: ["GET","HEAD"]
    pattern: '/account/profile'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/profile_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/profile_controller').default['show']>>>
    }
  }
  'profile.access_tokens.destroy': {
    methods: ["POST"]
    pattern: '/account/logout'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['destroy']>>>
    }
  }
  'profile.tasks.show_all': {
    methods: ["GET","HEAD"]
    pattern: '/account/tasks'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/tasks_controller').default['showAll']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/tasks_controller').default['showAll']>>>
    }
  }
  'profile.tasks.show': {
    methods: ["GET","HEAD"]
    pattern: '/account/tasks/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQueryForGet<InferInput<(typeof import('#validators/task_id').default)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/tasks_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/tasks_controller').default['show']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'profile.tasks.store': {
    methods: ["POST"]
    pattern: '/account/tasks'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/task').default)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/task').default)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/tasks_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/tasks_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'profile.tasks.patch': {
    methods: ["PATCH"]
    pattern: '/account/tasks/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/update_task').default)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/update_task').default)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/tasks_controller').default['patch']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/tasks_controller').default['patch']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'profile.tasks.delete': {
    methods: ["DELETE"]
    pattern: '/account/tasks/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/task_id').default)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/task_id').default)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/tasks_controller').default['delete']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/tasks_controller').default['delete']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
}

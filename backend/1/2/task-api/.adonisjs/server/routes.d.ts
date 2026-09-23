import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'tasks.store': { paramsTuple?: []; params?: {} }
    'tasks.show_all': { paramsTuple?: []; params?: {} }
    'tasks.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'tasks.delete': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'tasks.patch': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_tokens.store': { paramsTuple?: []; params?: {} }
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'profile.access_tokens.destroy': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'tasks.show_all': { paramsTuple?: []; params?: {} }
    'tasks.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'profile.profile.show': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'tasks.show_all': { paramsTuple?: []; params?: {} }
    'tasks.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'profile.profile.show': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'tasks.store': { paramsTuple?: []; params?: {} }
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_tokens.store': { paramsTuple?: []; params?: {} }
    'profile.access_tokens.destroy': { paramsTuple?: []; params?: {} }
  }
  DELETE: {
    'tasks.delete': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PATCH: {
    'tasks.patch': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}
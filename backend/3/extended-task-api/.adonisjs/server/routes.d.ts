import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_tokens.store': { paramsTuple?: []; params?: {} }
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'profile.access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'profile.tasks.show_all': { paramsTuple?: []; params?: {} }
    'profile.tasks.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'profile.tasks.store': { paramsTuple?: []; params?: {} }
    'profile.tasks.patch': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'profile.tasks.delete': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'profile.tasks.show_all': { paramsTuple?: []; params?: {} }
    'profile.tasks.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'profile.tasks.show_all': { paramsTuple?: []; params?: {} }
    'profile.tasks.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_tokens.store': { paramsTuple?: []; params?: {} }
    'profile.access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'profile.tasks.store': { paramsTuple?: []; params?: {} }
  }
  PATCH: {
    'profile.tasks.patch': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'profile.tasks.delete': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}
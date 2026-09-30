/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  tasks: {
    store: typeof routes['tasks.store']
    showAll: typeof routes['tasks.show_all']
    show: typeof routes['tasks.show']
    delete: typeof routes['tasks.delete']
    patch: typeof routes['tasks.patch']
  }
  auth: {
    newAccount: {
      store: typeof routes['auth.new_account.store']
    }
    accessTokens: {
      store: typeof routes['auth.access_tokens.store']
    }
  }
  profile: {
    profile: {
      show: typeof routes['profile.profile.show']
    }
    accessTokens: {
      destroy: typeof routes['profile.access_tokens.destroy']
    }
  }
}

import { Routing } from './Routing'

export interface State {
  routing: {
    location: Routing.HistoryLocation
  }
  UI: {
    mainNavActive: boolean
  }
  USER: {
    email: string | null
    firstName?: string | null
    isLogged: boolean
    lastName?: string | null
    role: string | null
    token: string | null
  }
}

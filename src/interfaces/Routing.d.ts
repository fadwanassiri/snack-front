import { History, Location } from 'history'
import { Route, match } from 'react-router'

export namespace Routing {
  export interface QueryLocation {
    [key: string]: string | number | boolean | null | undefined
  }

  export interface HistoryObject extends History { }
  export interface HistoryLocation extends Location { }

  export interface RouteObject extends Route { }
  export interface Match
    extends match<{
      [elemName: string]: string
    }> { }
}

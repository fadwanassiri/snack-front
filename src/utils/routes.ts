import { createLocation } from 'history/LocationUtils'
import { Routing } from '../interfaces/Routing'
import { State } from '../interfaces/State'
import { initialState } from '../reducers'

export const isRouteActive = (
  route: string = '',
  location: State['routing']['location'] = initialState.routing.location,
) => {
  const { pathname } = location

  return pathname.indexOf(route) === 0
}

export const extractQueryFromLocationSearch = (
  search: Routing.HistoryLocation['search'],
): Routing.QueryLocation =>
  search
    .substr(search.length >= 1 ? 1 : 0)
    .split('&')
    .filter((s) => s.length)
    .reduce((prev: {}, next: string) => {
      const elements = next.split('=')

      return {
        ...prev,
        [elements[0]]: elements[1],
      }
    }, {})

export const getSearchParametersFromLocation = (
  location: Routing.HistoryLocation,
  keys: string[],
): {
    [elemName: string]: any
  } => {
  const currentQuery = extractQueryFromLocationSearch(location.search)

  return keys.reduce((prev, next) => {
    if (typeof currentQuery[next] !== 'undefined') {
      return {
        ...prev,
        [next]: currentQuery[next],
      }
    }

    return prev
  }, {})
}

/**
 * Update a location with an object containing new search parameters
 * @param location
 * @param query
 */
export const updateLocation = (
  location: Routing.HistoryLocation | string = '',
  query: Routing.QueryLocation = {},
) => {
  const nextLocation = createLocation(location)

  // split current search
  const currentQuery = extractQueryFromLocationSearch(nextLocation.search)

  // extends splitted search with query
  const nextQuery = {
    ...currentQuery,
    ...query,
  }

  // write new search location
  const nextSearch = Object.keys(nextQuery)
    .filter((key) => {
      if (typeof nextQuery[key] !== 'boolean' && !nextQuery[key]) {
        return false
      }

      return true
    })
    .map((key) => `${key}=${nextQuery[key]}`)
    .join('&')

  return {
    ...nextLocation,
    search: `${nextSearch.length ? '?' : ''}${nextSearch}`,
  }
}

/**
 * Given a route such as '/:foo/content/:bar' and an object such as
 * { foo: 'baz', bar: 1337 }, it returns '/baz/content/1337'
 * @function
 * @param {String} urlToUpdate - The route path
 * @param {Object} params - The replacements to look for
 * @return {String} The replaced url
 */
export const getUrlFromRoutePath = (
  urlToUpdate = '',
  params = {},
  doCleanup = false,
) => {
  const re = /:(\w+)/g
  const replacements: { search: string; replace: string }[] = []
  const cancelledReplacements: string[] = []
  let url = urlToUpdate
  let result

  // Look for matches
  while ((result = re.exec(url)) !== null) {
    //eslint-disable-line
    // Check if a replacement exists
    if (typeof params[result[1]] !== 'undefined') {
      replacements.push({
        search: result[0],
        replace: params[result[1]],
      })
    } else {
      cancelledReplacements.push(result[0] as string)
    }
  }

  // Real replacement
  if (replacements.length) {
    replacements.forEach((replacement) => {
      url = url.replace(replacement.search, replacement.replace)
    })
  }

  if (doCleanup) {
    // Remove unreplaced dynamic queries
    cancelledReplacements.forEach((part) => {
      url = url.replace(part, '')
    })

    // Replace duplicates special chars
    url = url.replace(/\/+/g, '/')

    // Remove slash at the end of the url
    url = url.replace(/\/$/, '')

    // Replace special chars
    url = url.replace('*', '')
    url = url.replace('(', '')
    url = url.replace(')', '')
  }

  return url
}

export const buildUrlFromLocation = (location: Routing.HistoryLocation) => {
  const query = extractQueryFromLocationSearch(location.search)

  const search = Object.keys(query)
    .sort()
    .map((key) => `${key}=${query[key]}`)
    .join('&')

  return `${location.pathname}?${search}${location.hash}`
}

import queryString, {StringifyOptions} from 'query-string'

const getQueryString = (params: any) => {
  // Plain method to concat the params query string to url
  return Object.entries(params)
    .map(([key, value]: [any, any]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&')
}

const defaultOptions = {}
// Apply your global configurations here
const customStringify = <T extends Record<string, any>>(object: T, options?: StringifyOptions): string => {
  return queryString.stringify(object, {...defaultOptions, ...options})
}

const customQueryString = {
  ...queryString,
  stringify: customStringify,
  plainStringify: getQueryString,
}

export default customQueryString

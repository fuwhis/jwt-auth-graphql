import queryString from 'query-string'

export const useQueryString = () => {
  const fetchQueryString = (data: any) => {
    const queryStringData = queryString.stringify(data)

    return queryStringData
  }

  return fetchQueryString
}

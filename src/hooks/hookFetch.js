import useSWR from "swr"

export const headers = new Headers({
  'Access-Control-Allow-Origin': 'http://wikiforest.com',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Credentials': 'true',
  'Content-Type': 'application/json; charset=UTF-8',
  'Accept': 'application/json'
})

export function useFetch(method, url, body) {
  return useSWR(url, () => {
    return fetch(url, {method, headers, body, credentials: 'include'})
      .then(res => res.json())
  })
}

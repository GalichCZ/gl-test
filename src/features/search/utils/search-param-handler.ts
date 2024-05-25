export const searchParamHandler = (searchValue: string) => {
  const params = new URLSearchParams(window.location.search)
  if (searchValue) {
    params.set('q', searchValue)
  } else {
    params.delete('q')
  }
  const newUrl = getNewUrl(params)
  window.history.replaceState({}, '', newUrl)
}

function getNewUrl(params: URLSearchParams) {
  /* params.size gets undefined while testing
   * this approach does not change end result
   * it works fine for the browser and tests
   */
  const paramsString = params.toString()

  if (!paramsString) {
    return window.location.pathname
  }

  return window.location.pathname + '?' + params.toString()
}

import { searchParamHandler } from '../search-param-handler'

const originalLocation = window.location
const originalHistory = window.history

beforeAll(() => {
  const location = new URL('http://example.com') as unknown as Location
  Object.defineProperty(window, 'location', {
    configurable: true,
    value: location,
  })

  const history = {
    replaceState: jest.fn(),
  } as unknown as History & { replaceState: jest.Mock }
  Object.defineProperty(window, 'history', {
    configurable: true,
    value: history,
  })
})

afterAll(() => {
  Object.defineProperty(window, 'location', {
    configurable: true,
    value: originalLocation,
  })
  Object.defineProperty(window, 'history', {
    configurable: true,
    value: originalHistory,
  })
})

describe('searchParamHandler', () => {
  beforeEach(() => {
    ;(window.history.replaceState as jest.Mock).mockClear()
  })

  test('should set the search parameter "q" when searchValue is provided', () => {
    searchParamHandler('testValue')
    expect(window.history.replaceState).toHaveBeenCalledWith(
      {},
      '',
      '/?q=testValue'
    )
  })

  test('should remove the search parameter "q" when searchValue is an empty string', () => {
    window.location.search = '?q=oldValue'
    searchParamHandler('')
    expect(window.history.replaceState).toHaveBeenCalledWith({}, '', '/')
  })

  test('should update the search parameter "q" when searchValue is provided and other parameters exist', () => {
    window.location.search = '?foo=bar'
    searchParamHandler('newValue')
    expect(window.history.replaceState).toHaveBeenCalledWith(
      {},
      '',
      '/?foo=bar&q=newValue'
    )
  })
})

import '@testing-library/jest-dom'

if (typeof window !== 'undefined') {
  // Mock local storage
  Object.defineProperty(window, 'localStorage', {
    writable: true,
    value: {
      ...window.localStorage,
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
    },
  })

  // Mock session storage
  Object.defineProperty(window, 'sessionStorage', {
    writable: true,
    value: {
      ...window.sessionStorage,
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
    },
  })

  // Mock matchMedia
  // https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // deprecated
      removeListener: vi.fn(), // deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  })

  // Mock intersection observer
  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    value: vi.fn().mockImplementation(callback => {
      return {
        observe: vi.fn(element => {
          callback([{ target: element, isIntersecting: true }])
        }),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      }
    }),
  })

  // Mock resize observer
  Object.defineProperty(window, 'ResizeObserver', {
    writable: true,
    value: vi.fn().mockImplementation(callback => {
      return {
        observe: vi.fn(element => {
          callback([
            { target: element, contentRect: element.getBoundingClientRect() },
          ])
        }),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      }
    }),
  })
}

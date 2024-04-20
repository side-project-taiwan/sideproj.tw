import '@testing-library/jest-dom'

if (typeof window !== 'undefined') {
  // Mock local storage
  window.localStorage = {
    ...window.localStorage,
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
  }

  // Mock session storage
  window.sessionStorage = {
    ...window.sessionStorage,
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
  }
}

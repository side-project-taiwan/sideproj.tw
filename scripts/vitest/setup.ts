import '@testing-library/jest-dom'

// Mock local storage
const localStorageMock = {
  ...window.localStorage,
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
}

window.localStorage = localStorageMock

// Mock session storage
const sessionStorageMock = {
  ...window.sessionStorage,
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
}

window.sessionStorage = sessionStorageMock

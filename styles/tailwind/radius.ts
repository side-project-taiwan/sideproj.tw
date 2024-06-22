const BORDER_RADIUS = {
  lg: 'var(--radius)',
  md: 'calc(var(--radius) - 2px)',
  sm: 'calc(var(--radius) - 4px)',
  xs: 'calc(var(--radius) - 6px)',
} as const

export default BORDER_RADIUS

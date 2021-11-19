function getColor (color) {
  const found = ['primary', 'secondary', 'highlight', 'dark', 'clear'].includes(color)
  if (found) return color
  return 'dark'
}

export { getColor }

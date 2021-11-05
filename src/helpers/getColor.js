function getColor (color) {
  const colors = ['primary', 'secondary', 'highlight', 'dark', 'clear']
  const found = colors.find(item => item === color)
  if (found) return found
  return 'dark'
}

export { getColor }

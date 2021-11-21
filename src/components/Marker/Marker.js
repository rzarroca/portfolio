import './marker.css'

export function Marker ({ children, className }) {
  return (
    <mark className={`highligthText ${className}`}>
      {children}
    </mark>
  )
}

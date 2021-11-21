import './marker.css'

export function Marker ({ children }) {
  return (
    <mark className='highligthText'>
      {children}
    </mark>
  )
}

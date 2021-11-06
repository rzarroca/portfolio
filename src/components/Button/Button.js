import './button.css'

export function Button ({ children = 'New Button', ...props }) {
  return (
    <button className='button' {...props}>{children}</button>
  )
}

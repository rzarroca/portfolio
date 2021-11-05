import './links.css'

export function Link ({ children = 'Place Link', href, ...props }) {
  return (
    <a href={href || '#'} className='link link-io' {...props}>{children}</a>
  )
}

import './links.css'
import { getColor } from 'helpers/getColor'

export function Link ({ children = 'New Link', href, small, color, ...props }) {
  const smallText = small ? 'link--smallText' : ''
  const fontColor = `link--${getColor(color)}`
  return (
    <a href={href || '#'} className={`link link-io ${smallText} ${fontColor}`} {...props}>{children}</a>
  )
}

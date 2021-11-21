import './links.css'
import { getColor } from 'helpers/getColor'

export function Link ({ children = 'New Link', href, small, color, reverse, ...props }) {
  const smallText = small ? 'link--smallText' : ''
  const fontColor = `link--${getColor(color)}`
  const reversed = reverse ? 'link--reversed' : ''
  return (
    <a href={href || '#'} className={`link link-io ${smallText} ${fontColor} ${reversed}`} {...props}>{children}</a>
  )
}

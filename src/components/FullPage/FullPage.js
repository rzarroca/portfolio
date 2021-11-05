import './fullpage.css'
import { getColor } from 'helpers/getColor'

export function FullPage ({ children, background, ...props }) {
  const backgroundColor = background ? `fullpage-${getColor(background)}` : 'fullpage-dark'

  return (
    <section className={`fullpage ${backgroundColor}`} {...props}>
      {children}
    </section>

  )
}

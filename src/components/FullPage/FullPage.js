import './fullpage.css'
import { getColor } from 'helpers/getColor'

export function FullPage ({ children, background, extend, ...props }) {
  const backgroundColor = background ? `fullpage-${getColor(background)}` : 'fullpage-dark'
  const extendDisplay = extend ? 'fullpage-extend' : ''

  return (
    <section className={`fullpage ${backgroundColor} ${extendDisplay}`} {...props}>
      {children}
    </section>

  )
}

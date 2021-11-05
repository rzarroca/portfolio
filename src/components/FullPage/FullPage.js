import './fullpage.css'
import { getColor } from 'helpers/getColor'

export function FullPage ({ children, background }) {
  const backgroundColor = background ? `fullpage-${getColor(background)}` : 'fullpage-dark'

  return (
    <section className={`fullpage ${backgroundColor}`}>
      {children}
    </section>

  )
}

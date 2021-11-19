import './navList.css'
import { v4 as uuid } from 'uuid'
import { getColor } from 'helpers/getColor'

export function Navlist ({ children, color, title = '' }) {
  const fontColor = `navList--${getColor(color)}`
  return (
    <article className={`navList ${fontColor}`}>
      <header className='navList-header'>
        <h1>{title}</h1>
      </header>
      <nav>
        <ul className='navList-links'>
          {children.map(link => <li key={uuid()}>{link}</li>)}
        </ul>
      </nav>
    </article>
  )
}

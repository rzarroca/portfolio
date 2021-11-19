import './navList.css'
import { v4 as uuid } from 'uuid'

export function Navlist ({ children, title }) {
  return (
    <article className='navList'>
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

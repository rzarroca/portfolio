import './landing.css'
import { FullPage } from 'components/FullPage/FullPage'
import { Summary } from 'components/Summary/Summary'
import { Link } from 'components/Link/Link'
import { Button } from 'components/Button/Button'

export function Landing () {
  return (
    <FullPage background='clear'>
      <div className='landing'>
        <Summary />
        <article className='pagesLinks'>
          <header className='pagesLinks-header'>
            <h1>Please, have a look around!</h1>
          </header>
          <nav>
            <ul className='pagesLinks-links'>
              <li><Link>About me</Link></li>
              <li><Link>Projects</Link></li>
              <li><Button>Contact Me</Button></li>
            </ul>
          </nav>
        </article>
      </div>

    </FullPage>
  )
}

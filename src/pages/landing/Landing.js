/* eslint-disable jsx-a11y/img-redundant-alt */
import './landing.css'
import { FullPage } from 'components/FullPage/FullPage'
import { Link } from 'components/Link/Link'
import { Button } from 'components/Button/Button'
import avatar from '../../assets/images/DSC04573.JPG'

export function Landing () {
  return (
    <FullPage background='clear'>
      <div className='landing'>
        <article className='summary'>
          <header>
            <h1>Hello World!</h1>
            <h2>I'm Ricardo Zarroca, <span>fullstack web developer</span></h2>
          </header>
          <img src={avatar} alt='avatar image' />
          <p className='p1'>
            Every time the human being has had to solve a need, he has found a solution <span>based on technology.</span>
          </p>
          <p className='p2'>
            This is one of the motivations that have driven me to enter the world of web development and technology, which offers <span>endless opportunities</span> to solve our needs and push us to a new level.
          </p>
        </article>
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

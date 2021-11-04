/* eslint-disable jsx-a11y/img-redundant-alt */
import './landingPage.css'
import { FullPage } from '../../components/FullPage/FullPage'
import avatar from '../../assets/images/DSC04573.JPG'

export function LadingPage () {
  return (
    <FullPage primary>
      <div className='landingPage'>
        <article className='summary'>
          <header>
            <h1>Hello World!</h1>
            <h2>I'm Ricardo Zarroca, <bold>fullstack web developer</bold></h2>
          </header>
          <figure>
            <img src={avatar} alt='avatar image' />
          </figure>
          <p className='p1'>
            Every time the human being has had to solve a need, he has found a solution <bold>based on technology.</bold>
          </p>
          <p className='p2'>
            This is one of the motivations that have driven me to enter the world of web development and technology, which offers <bold>endless opportunities</bold> to solve our needs and push us to a new level.
          </p>
        </article>

        <article>
          <h1>botones</h1>
        </article>
      </div>

    </FullPage>
  )
}

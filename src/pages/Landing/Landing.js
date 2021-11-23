/* eslint-disable jsx-a11y/img-redundant-alt */
import './landing.css'

import { FullPage } from 'components/FullPage/FullPage'
import { Link } from 'components/Link/Link'
import { Button } from 'components/Button/Button'
import { Navlist } from 'components/NavList/NavList'
import { Marker } from 'components/Marker/Marker'

import { useDrawer } from 'hooks/useDrawer'

import avatar from '../../assets/images/DSC04573.JPG'

export function Landing () {
  const toogleView = useDrawer()

  return (
    <FullPage background='primary'>
      <div className='landing'>
        <article className='summary'>
          <header>
            <h1>Hello World!</h1>
            <h2>I'm Ricardo Zarroca, <Marker>fullstack web developer</Marker></h2>
          </header>
          <img src={avatar} alt='avatar image' />
          <p className='p1'>
            Every time the human being has had to solve a need, he has found a <Marker>solution based on technology.</Marker>
          </p>
          <p className='p2'>
            This is one of the motivations that have driven me to enter the world of web development and technology, which <Marker>offers endless opportunities</Marker> to solve our needs and push us to a new level.
          </p>
        </article>
        <Navlist title='Please, have a look around!'>
          <Link href='#about'>About me</Link>
          <Link href='#projects'>Projects</Link>
          <Button onClick={() => toogleView()}>Contact Me</Button>
        </Navlist>
      </div>

    </FullPage>
  )
}

import { lazy } from 'react'

import { Landing } from 'pages/Landing/Landing'
import { Contact } from 'pages/Contact/Contact'

import { DrawerProvider } from 'hooks/useDrawer'
import LazyPage from 'components/LazyPage/LazyPage'

const About = lazy(() => import('pages/About/About'))
const Projects = lazy(() => import('pages/Projects/Projects'))
const Footer = lazy(() => import('pages/Footer/Footer'))

export function App () {
  return (
    <main>
      <DrawerProvider content={<Contact />}>
        <Landing />
        <LazyPage id='about'>
          <About />
        </LazyPage>
        <LazyPage id='projects'>
          <Projects />
        </LazyPage>
        <LazyPage>
          <Footer />
        </LazyPage>
      </DrawerProvider>
    </main>
  )
}

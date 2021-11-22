import { Landing } from 'pages/Landing/Landing'
import { About } from 'pages/About/About'
import { LazyProject } from './pages/Projects/Projects'
import { Contact } from 'pages/Contact/Contact'
import { Footer } from 'pages/Footer/Footer'

import { DrawerProvider } from 'hooks/useDrawer'

export function App () {
  return (
    <main>
      <DrawerProvider content={<Contact />}>
        <Landing />
        <About />
        <LazyProject />
        <Footer />
      </DrawerProvider>
    </main>
  )
}

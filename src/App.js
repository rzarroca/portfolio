import { Landing } from 'pages/Landing/Landing'
import { About } from 'pages/About/About'
import { Projects } from './pages/Projects/Projects'
import { DrawerProvider } from 'hooks/useDrawer'
import { Contact } from 'pages/Contact/Contact'

export function App () {
  return (
    <main>
      <DrawerProvider content={<Contact />}>
        <Landing />
        <About />
        <Projects />
      </DrawerProvider>
    </main>
  )
}

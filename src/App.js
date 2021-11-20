import { Landing } from 'pages/landing/Landing'
import { About } from 'pages/About/About'
import { Projects } from './pages/Projects/Projects'
import { DrawerProvider } from 'hooks/useDrawer'

export function App () {
  return (
    <main>
      <DrawerProvider content='probando nuevo content'>
        <Landing />
        <About />
        <Projects />
      </DrawerProvider>
    </main>
  )
}

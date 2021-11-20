import { useState, useContext, createContext } from 'react'
import Drawer from '@mui/material/Drawer'

const drawerContext = createContext()

function useDrawer () {
  const context = useContext(drawerContext)

  if (!context) {
    throw new Error('useDrawer must be inside <DrawerProvider> context')
  }

  return context
}

function DrawerProvider ({ children, content = 'empty drawer' }) {
  let [drawerView, setDrawerView] = useState(false)

  function toogleDrawer () {
    setDrawerView(drawerView => !drawerView)
  }

  return (
    <drawerContext.Provider value={toogleDrawer}>
      {children}
      <Drawer
        anchor='right'
        open={drawerView}
        onClose={() => toogleDrawer()}
      >
        {content}
      </Drawer>
    </drawerContext.Provider>
  )
}

export { useDrawer, DrawerProvider }

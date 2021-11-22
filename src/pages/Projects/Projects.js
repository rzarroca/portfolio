import './lazy.css'

import { lazy, Suspense } from 'react'
import { useNear } from 'hooks/useNear'
import LinearProgress from '@mui/material/LinearProgress'

const Projects = lazy(() => import('./notLazy'))

export function LazyProject () {
  const { isNear, refElement } = useNear()
  return (
    <div ref={refElement}>
      <Suspense fallback={<div className='lazyPage'><LinearProgress color='inherit' /></div>}>
        {isNear ? <Projects /> : null}
      </Suspense>
    </div>
  )
}

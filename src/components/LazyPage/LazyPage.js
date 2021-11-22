/* eslint-disable react/jsx-closing-tag-location */
import './lazyPage.css'

import { Suspense } from 'react'
import CircularProgress from '@mui/material/CircularProgress'

import { useNear } from 'hooks/useNear'

export default function LazyPage ({ children }) {
  const { isNear, refElement } = useNear()
  return (
    <>
      {isNear
        ? <Suspense fallback={<div className='lazyPage'><CircularProgress color='secondary' /></div>}>
          {children}
        </Suspense>
        : <div ref={refElement} className='lazyPage' />}
    </>
  )
}

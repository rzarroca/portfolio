import { useState, useEffect, useRef } from 'react'

export function useNear () {
  const [isNear, setValue] = useState(false)
  const refElement = useRef()

  useEffect(() => {
    let observer

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: '100px'
      })

      observer.observe(refElement.current)
    })

    function onChange (entries) {
      const observedElement = entries[0]

      if (observedElement.isIntersecting) {
        setValue(true)
        observer.disconnect()
      }
    }
    return () => observer && observer.disconnect
  })

  return { isNear, refElement }
}

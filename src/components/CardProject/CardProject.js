import './cardProject.css'
import { useState } from 'react'
import { ImageWithFallback } from 'components/ImageWithFallback/ImageWithFallback'

export function CardProject ({
  title = 'Project name',
  description = 'Project description',
  image,
  alt = 'project image',
  children
}) {
  let [showLinks, setShowLinks] = useState(false)

  function getVisibility (boolean) {
    return boolean ? 'cardProject-information--visible' : ''
  }

  return (
    <article className='cardProject' onClick={() => setShowLinks(state => !state)}>
      <header className='cardProject-header'>
        <h1 className='cardProject-title'>{title}</h1>
        <p className='cardProject-description'>{description}</p>
      </header>
      <figure className='cardProject-content'>
        <ImageWithFallback image={image} alt={alt} className='cardProject-image' />
        <figcaption className={`cardProject-information ${getVisibility(showLinks)}`}>{
          showLinks ? children : null
        }
        </figcaption>
      </figure>
    </article>
  )
}

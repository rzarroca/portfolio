import './cardProject.css'
import { ImageWithFallback } from 'components/ImageWithFallback/ImageWithFallback'

export function CardProject ({
  title = 'Project name',
  description = 'Project description',
  image,
  alt = 'project image',
  children
}) {
  return (
    <article className='cardProject'>
      <header className='cardProject-header'>
        <h1 className='cardProject-title'>{title}</h1>
        <p className='cardProject-description'>{description}</p>
      </header>
      <figure className='cardProject-content'>
        <ImageWithFallback image={image} alt={alt} className='cardProject-image' />
        <figcaption className='cardProject-information'>{children}</figcaption>
      </figure>
    </article>
  )
}

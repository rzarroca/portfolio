import './cardProject.css'
import { ImageWithFallback } from 'components/ImageWithFallback/ImageWithFallback'

export function CardProject ({
  title = 'Project name',
  description = 'Project description',
  image,
  alt = 'project image',
  children,
  ...props
}) {
  return (
    <article {...props}>
      <header>
        <h1>{title}</h1>
        <p>{description}</p>
      </header>
      <figure>
        <ImageWithFallback image={image} alt={alt} fallbackColor='highlight' />
        <figcaption>{children}</figcaption>
      </figure>
    </article>
  )
}

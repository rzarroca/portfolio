import './stackSection.css'
import { v4 as uuid } from 'uuid'

export function StackSection ({ title, children, ...props }) {
  return (
    <section className='stack' {...props}>
      <h2 className='stack-description'>{title || 'Stack title'}</h2>
      <ul className='stack-list'>

        {children?.map(element => (
          <li key={uuid()} className='stack-item'>{element}</li>
        ))}
      </ul>
    </section>
  )
}

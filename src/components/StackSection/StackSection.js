import './stackSection.css'

export function StackSection ({ title, children, ...props }) {
  console.log(children)
  return (
    <section className='stack'>
      <h2 className='stack-description'>{title || 'Stack title'}</h2>
      <ul className='stack-list'>
        {children}
      </ul>
    </section>
  )
}

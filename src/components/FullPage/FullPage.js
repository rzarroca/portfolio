import './fullpage.css'

export function FullPage ({ children, primary, secondary, highlight, dark, clear }) {
  const backgroundColor = 'clear'

  return (
    <section className={`fullpage container-${backgroundColor}`}>
      {children}
    </section>

  )
}

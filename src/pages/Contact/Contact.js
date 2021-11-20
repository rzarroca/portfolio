import './contact.css'
import { Link } from 'components/Link/Link'

import { ReactComponent as Mail } from 'assets/svg/mail.svg'
import { ReactComponent as Phone } from 'assets/svg/phone.svg'
import { ReactComponent as Pin } from 'assets/svg/pin.svg'
import { ReactComponent as Linkedin } from 'assets/svg/linkedin.svg'
import { ReactComponent as GitHub } from 'assets/svg/github.svg'

export function Contact () {
  return (
    <aside className='sideLinks'>
      <h2>Contact Info</h2>
      <ul className='sideLinks-list'>
        <li className='sideLinks-item'>
          <Link href='mailto: ricardozarroca@gmail.com' small>ricardozarroca@gmail.com </Link>
          <Mail fill='#30475E' className='sideLinks-icon' />
        </li>
        <li className='sideLinks-item'>
          <Link href='tel:+34633670474' small>+34-633670474</Link>
          <Phone fill='#30475E' className='sideLinks-icon' />
        </li>
        <li className='sideLinks-item'>
          Las Palmas de Gran Canaria, Spain
          <Pin fill='#30475E' className='sideLinks-icon' />
        </li>
        <li className='sideLinks-item'>
          <Link href='https://linkedin.com/in/rzarroca' small>linkedin.com/in/rzarroca</Link>
          <Linkedin fill='#30475E' className='sideLinks-icon' />
        </li>
        <li className='sideLinks-item'>
          <Link href='https://github.com/rzarroca' small>github.com/rzarroca</Link>
          <GitHub fill='#30475E' className='sideLinks-icon' />
        </li>
      </ul>
    </aside>
  )
}

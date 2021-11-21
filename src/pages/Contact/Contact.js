/* eslint-disable react/jsx-indent */
import './contact.css'
import { v4 as uuid } from 'uuid'
import { Link } from 'components/Link/Link'

import { ReactComponent as Mail } from 'assets/svg/mail.svg'
import { ReactComponent as Phone } from 'assets/svg/phone.svg'
import { ReactComponent as Pin } from 'assets/svg/pin.svg'
import { ReactComponent as Linkedin } from 'assets/svg/linkedin.svg'
import { ReactComponent as GitHub } from 'assets/svg/github.svg'

export function Contact () {
  const listArray = [
    {
      type: 'link',
      href: 'mailto: ricardozarroca@gmail.com',
      text: 'ricardozarroca@gmail.com',
      icon: <Mail fill='#E8C084' className='sideLinks-icon' />
    },
    {
      type: 'link',
      href: 'tel:+34633670474',
      text: '+34-633670474',
      icon: <Phone fill='#E8C084' className='sideLinks-icon' />
    },
    {
      type: 'text',
      text: 'Las Palmas de Gran Canaria, Spain',
      icon: <Pin fill='#E8C084' className='sideLinks-icon' />
    },
    {
      type: 'link',
      href: 'https://linkedin.com/in/rzarroca',
      text: 'https://linkedin.com/in/rzarroca',
      icon: <Linkedin fill='#E8C084' className='sideLinks-icon' />
    },
    {
      type: 'link',
      href: 'https://github.com/rzarroca',
      text: 'github.com/rzarroca',
      icon: <GitHub fill='#E8C084' className='sideLinks-icon' />
    }
  ]
  return (
    <aside className='sideLinks'>
      <h2>Contact Info</h2>
      <ul className='sideLinks-list'>
        {listArray.map(item => (
          <li key={uuid()} className='sideLinks-item'>
            {item.type === 'link'
              ? <>
                  <Link href={item.href} small color='dark'>{item.text}</Link>
                  {item.icon}
                </>
              : <>
                  {item.text}
                  {item.icon}
                </>}
          </li>
        ))}
      </ul>
    </aside>
  )
}

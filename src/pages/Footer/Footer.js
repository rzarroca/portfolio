import './footer.css'

import { LinkList } from 'components/LinkList/LinkList'
import { Marker } from 'components/Marker/Marker'

import { ReactComponent as Mail } from 'assets/svg/mail.svg'
import { ReactComponent as Phone } from 'assets/svg/phone.svg'
import { ReactComponent as Linkedin } from 'assets/svg/linkedin.svg'
import { ReactComponent as GitHub } from 'assets/svg/github.svg'

export function Footer () {
  const contactLinks = [
    {
      type: 'link',
      href: 'mailto: ricardozarroca@gmail.com',
      text: 'ricardozarroca@gmail.com',
      icon: <Mail fill='#E8E8E8' className='footer-icon' />
    },
    {
      type: 'link',
      href: 'tel:+34633670474',
      text: '+34-633670474',
      icon: <Phone fill='#E8E8E8' className='footer-icon' />
    },
    {
      type: 'link',
      href: 'https://linkedin.com/in/rzarroca',
      text: 'https://linkedin.com/in/rzarroca',
      icon: <Linkedin fill='#E8E8E8' className='footer-icon' />
    },
    {
      type: 'link',
      href: 'https://github.com/rzarroca',
      text: 'github.com/rzarroca',
      icon: <GitHub fill='#E8E8E8' className='footer-icon' />
    }
  ]
  return (
    <footer className='footer'>
      <LinkList list={contactLinks} color='clear' className='footer-list' reverse />
      <p className='footer-text'>This page does not store your data nor use cookies.</p>
      <p className='footer-text'>Copyright © 2021 <Marker>by rzarroca</Marker></p>
    </footer>
  )
}

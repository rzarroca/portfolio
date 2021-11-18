import './cardProjectLinks.css'
import { Link } from 'components/Link/Link'
import Www from 'assets/svg/www.svg'
import Github from 'assets/svg/github.svg'

export function CardProjectLinks ({ webUrl, gitHubUrl }) {
  return (
    <nav className='cardProjectLinks'>
      <Link href={webUrl} target='_blank' rel='noreferrer'>
        <img src={Www} alt='webpage' />
      </Link>
      <Link href={gitHubUrl} target='_blank' rel='noreferrer'>
        <img src={Github} alt='gitHub' />
      </Link>
    </nav>
  )
}

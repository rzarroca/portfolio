import './cardProjectLinks.css'
import { Link } from 'components/Link/Link'
import { ReactComponent as Www } from 'assets/svg/www.svg'
import { ReactComponent as Github } from 'assets/svg/github.svg'

export function CardProjectLinks ({ webUrl, gitHubUrl }) {
  return (
    <nav className='cardProjectLinks'>
      <Link href={webUrl} target='_blank' rel='noreferrer'>
        <Www fill='#E8C084' />|
      </Link>
      <Link href={gitHubUrl} target='_blank' rel='noreferrer'>
        <Github fill='#E8C084' />
      </Link>
    </nav>
  )
}

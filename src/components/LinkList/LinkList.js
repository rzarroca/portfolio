/* eslint-disable react/jsx-closing-tag-location */
import './linkList.css'
import { v4 as uuid } from 'uuid'
import { Link } from 'components/Link/Link'

export function LinkList ({ list, className = 'linkList-flex', color = 'dark', reverse }) {
  const reversed = reverse ? 'linkList-item--reversed' : ''
  return (
    <ul className={className}>
      {list.map(item => (
        <li key={uuid()} className={`linkList-item ${reversed}`}>
          {item.type === 'link'
            ? <>
              <Link href={item.href} small color={color}>{item.text}</Link>
              {item.icon}
            </>
            : <>
              {item.text}
              {item.icon}
            </>}
        </li>
      ))}
    </ul>
  )
}

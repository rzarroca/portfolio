import './about.css'
import { FullPage } from 'components/FullPage/FullPage'
import { StackSection } from 'components/StackSection/StackSection'

import { ReactComponent as Mysql } from 'assets/svg/mysql.svg'
import { ReactComponent as Express } from 'assets/svg/express.svg'
import { ReactComponent as ReactJs } from 'assets/svg/react.svg'
import { ReactComponent as Node } from 'assets/svg/node.svg'
import { ReactComponent as Jest } from 'assets/svg/jest.svg'
import { ReactComponent as Webpack } from 'assets/svg/webpack.svg'
import { ReactComponent as Figma } from 'assets/svg/figma.svg'
import { ReactComponent as Mongo } from 'assets/svg/mongodb.svg'
import { ReactComponent as Redux } from 'assets/svg/redux.svg'
import { ReactComponent as GraphQL } from 'assets/svg/graphql.svg'
import testingLibrary from 'assets/images/react-tl.png'

export function About () {
  return (
    <FullPage background='primary'>
      <div className='aboutStructure'>
        <article className='card'>
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis impedit natus nihil debitis, hic inventore labore dolore reiciendis placeat vitae ipsum odio iusto esse quae sit perferendis dolorum consequatur? Ullam.
          </p>
        </article>
        <article className='card'>
          <h1>Stacks</h1>
          <div className='flexBox'>
            <StackSection title='core'>
              <Mysql />
              <Express />
              <ReactJs />
              <Node />
            </StackSection>
            <StackSection title='ecosystem'>
              <Jest />
              <Webpack />
              <img src={testingLibrary} alt='react testing library' />
              <Figma />
              Scrum
            </StackSection>
            <StackSection title='learning'>
              <Mongo />
              <Redux />
              <GraphQL />
            </StackSection>
          </div>
        </article>
      </div>
    </FullPage>
  )
}

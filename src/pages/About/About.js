import './about.css'
import { FullPage } from 'components/FullPage/FullPage'
import { StackSection } from 'components/StackSection/StackSection'

import { ReactComponent as Mysql } from 'assets/svg/mysql.svg'
import { ReactComponent as Express } from 'assets/svg/express.svg'
import { ReactComponent as ReactJs } from 'assets/svg/react.svg'
import { ReactComponent as Node } from 'assets/svg/node.svg'

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
            <StackSection>
              <Mysql />
              <Express />
              <ReactJs />
              <Node />
            </StackSection>
            <section>
              <h2>Ecosystem</h2>
              <ul>
                <li>Jest</li>
                <li>React testing library</li>
                <li>Webpack</li>
                <li>Figma</li>
                <li>Scrum</li>
              </ul>
            </section>
            <section>
              <h2>Learning</h2>
              <ul>
                <li>MongoDb</li>
                <li>Redux</li>
                <li>GraphQL</li>
              </ul>
            </section>
          </div>
        </article>
      </div>
    </FullPage>
  )
}

import './about.css'
import { FullPage } from 'components/FullPage/FullPage'
import { StackSection } from 'components/StackSection/StackSection'
import { Marker } from 'components/Marker/Marker'

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
    <FullPage background='clear'>
      <div className='aboutStructure'>
        <article className='card'>
          <h1>About</h1>
          <p>
            I'm an electromechanical engineer and a <Marker className='highligthText-clearBackground'>brewer enthusiast!</Marker> that has <Marker className='highligthText-clearBackground'>pursue his passion at the IT & Developer world</Marker>.
            Currently living at Las Palmas de Gran Canaria, Spain (pretty nice weather here..).
          </p>
          <p>
            Passionate for <Marker className='highligthText-clearBackground'>fast pages</Marker>, animations and creating intuitive, <Marker className='highligthText-clearBackground'>dynamic user experiences</Marker>.
            <Marker className='highligthText-clearBackground'>Web app constructions</Marker> for solve needs are my field, with a global understanding of its creation process.
          </p>
        </article>
        <article className='card aboutStructure-enlarge'>
          <h1>Stacks</h1>
          <div className='stacksFlex'>
            <StackSection title='core'>
              <Mysql />
              <Express />
              <ReactJs />
              <Node />
            </StackSection>
            <StackSection title='ecosystem'>
              <Jest />
              <img src={testingLibrary} alt='react testing library' />
              <Webpack />
              <Figma />
              <p>SCRUM</p>
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

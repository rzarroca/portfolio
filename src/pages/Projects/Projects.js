/* eslint-disable jsx-a11y/anchor-is-valid */
import './projects.css'
import { FullPage } from 'components/FullPage/FullPage'
import { CardProject } from 'components/CardProject/CardProject'
import { CardProjectLinks } from 'components/CardProjectLinks/CardProjectLinks'

import WebAppImg from 'assets/images/webApp.jpg'
import PortfolioImg from 'assets/images/portfolio.jpg'
import CalculatorImg from 'assets/images/calculator.jpg'

export function Projects () {
  return (
    <FullPage background='primary' extend>
      <div className='project'>
        <section className='project-section'>
          <h1 className='project-title'>Last Projects</h1>

          <CardProject
            title='cowork project'
            description='fullstack web app'
            image={WebAppImg}
          >
            <CardProjectLinks webUrl='https://freespot.rzarroca.net/' gitHubUrl='https://github.com/FreeSpot-Coworking-Search/Cowork-project' />
          </CardProject>

          <CardProject
            title='portfolio'
            description='react web page'
            image={PortfolioImg}
          >
            <CardProjectLinks gitHubUrl='https://github.com/rzarroca/portfolio' />
          </CardProject>

          <CardProject
            title='calculator app'
            description='vanilla js practise'
            image={CalculatorImg}
          >
            <CardProjectLinks webUrl='https://rzarroca.github.io/calculator/' gitHubUrl='https://github.com/rzarroca/calculator' />
          </CardProject>
        </section>

        <section className='project-section'>
          <h1 className='project-title'>Other Projects</h1>
          <nav>
            <ul>
              <li><a href='#'>Project</a></li>
              <li><a href='#'>Project</a></li>
              <li><a href='#'>Project</a></li>
              <li><a href='#'>Project</a></li>
              <li><a href='#'>Project</a></li>
            </ul>
          </nav>
        </section>
      </div>
    </FullPage>
  )
}

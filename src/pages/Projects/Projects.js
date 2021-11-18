/* eslint-disable jsx-a11y/anchor-is-valid */
import './projects.css'
import { FullPage } from 'components/FullPage/FullPage'
import { CardProject } from 'components/CardProject/CardProject'
import { CardProjectLinks } from 'components/CardProjectLinks/CardProjectLinks'

import WebApp from 'assets/images/webApp.jpg'

export function Projects () {
  return (
    <FullPage background='primary' extend>
      <div className='project'>
        <section className='project-section'>
          <h1>Last Projects</h1>

          <CardProject
            title='cowork project'
            description='fullstack web app'
            image={WebApp}
          >
            <CardProjectLinks webUrl='https://freespot.rzarroca.net/' gitHubUrl='https://github.com/FreeSpot-Coworking-Search/Cowork-project' />
          </CardProject>
        </section>

        <section>
          <h1>Other Projects</h1>
          <ol>
            <li><a href='#'>Project</a></li>
            <li><a href='#'>Project</a></li>
            <li><a href='#'>Project</a></li>
            <li><a href='#'>Project</a></li>
            <li><a href='#'>Project</a></li>
          </ol>
        </section>
      </div>
    </FullPage>
  )
}

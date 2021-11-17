import './projects.css'
import { FullPage } from 'components/FullPage/FullPage'
import { CardProject } from 'components/CardProject/CardProject'

export function Projects () {
  return (
    <FullPage background='primary' extend>
      <div className='project-structure'>
        <section>
          <h1>Last Projects</h1>
          <CardProject>
            figcaption
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

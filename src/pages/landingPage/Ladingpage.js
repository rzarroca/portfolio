import './landingPage.css'
import { FullPage } from '../../components/FullPage/FullPage'
import { Summary } from 'components/Summary/Summary'

export function LadingPage () {
  return (
    <FullPage primary>
      <div className='landingPage'>
        <Summary />
        <article>
          <header>
            <h1>Please, have a look around!</h1>
          </header>
        </article>
      </div>

    </FullPage>
  )
}

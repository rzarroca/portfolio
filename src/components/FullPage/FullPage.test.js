import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { FullPage } from './FullPage'

describe('<Fullpage>', () => {
  let component
  const message = 'test message'
  beforeEach(() => {
    component = render(
      <FullPage>
        <h1>{message}</h1>
      </FullPage>
    )
  })

  test('component renders', () => {
    component.getByText(message)
  })
})

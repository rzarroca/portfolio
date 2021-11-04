import '@testing-library/jest-dom/extend-expect'
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

  test('component renders children', () => {
    component.getByText(message)
  })

  test('component has grid', () => {
    const children = component.getByText(message)
    expect(children.parentNode).toHaveClass('fullpage')
  })
})

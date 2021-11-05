import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { FullPage } from './FullPage'

describe('<Fullpage>', () => {
  let component
  const message = 'test message'

  beforeEach(() => {
    component = render(
      <FullPage background='primary'>
        <h1>{message}</h1>
      </FullPage>
    )
  })

  test('renders children', () => {
    component.getByText(message)
  })

  test('has grid', () => {
    const children = component.getByText(message)
    expect(children.parentNode).toHaveClass('fullpage')
  })

  test('has background default color', () => {
    component.rerender(
      <FullPage>
        <h1>{message}</h1>
      </FullPage>
    )
    const children = component.getByText(message)
    expect(children.parentNode).toHaveClass('fullpage-dark')
  })

  test('has changes background color if its in the list', () => {
    const children = component.getByText(message)
    expect(children.parentNode).toHaveClass('fullpage-primary')
  })
})

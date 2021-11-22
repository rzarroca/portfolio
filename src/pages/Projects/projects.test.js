import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { LazyProject } from './Projects'

describe('<LazyLoad>', () => {
  test('renders children', () => {
    const component = render(
      <LazyProject>
        <h1>test header</h1>
        <p>test paragraph</p>
      </LazyProject>
    )

    component.getByText('test paragraph')
  })
})

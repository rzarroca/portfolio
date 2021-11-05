import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Link } from './Link'

describe('<Link>', () => {
  let component
  const text = 'anchor test'

  beforeEach(() => {
    component = render(
      <Link href='https://random' foo='foo' bar='bar'>
        {text}
      </Link>
    )
  })

  test('renders default text without childrens', () => {
    component.rerender(
      <Link />
    )
    component.getByText('New Link')
  })

  test('renders children', () => {
    component.getByText(text)
  })

  test('has default href attribute', () => {
    component.rerender(
      <Link />
    )
    const anchor = component.getByText('New Link')
    expect(anchor).toHaveAttribute('href', '#')
  })
})

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { StackSection } from './StackSection'

describe('<StackSection>', () => {
  const title = 'test title'

  test('renders default title', () => {
    const component = render(
      <StackSection />
    )

    component.getByText('Stack title')
  })

  test('renders props title', () => {
    const component = render(
      <StackSection title={title} />
    )

    component.getByText(title)
  })

  test('renders childrens as list', () => {
    const component = render(
      <StackSection title={title}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </StackSection>
    )
  })
})

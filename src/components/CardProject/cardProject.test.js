import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { CardProject } from './CardProject'

describe('<CardProject>', () => {
  let component
  beforeEach(() => {
    component = render(<CardProject />)
  })

  test('must have default header', () => {
    const h1 = component.getByText('Project name')
  })

  test('must have default description', () => {
    const h1 = component.getByText('Project description')
  })

  test('must have default picture', () => {
    const img = component.getByRole('img', { name: 'project image' })
  })
})

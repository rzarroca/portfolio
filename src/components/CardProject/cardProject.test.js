import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { CardProject } from './CardProject'

describe('<CardProject> defaults', () => {
  let component
  beforeEach(() => {
    component = render(<CardProject />)
  })

  test('must have default header', () => {
    component.getByText('Project name')
  })

  test('must have default description', () => {
    component.getByText('Project description')
  })

  test('must have default picture', () => {
    component.getByRole('img', { name: 'project image' })
  })
})

describe('<CardProject> with content', () => {
  let component
  beforeEach(() => {
    component = render(
      <CardProject
        title='test title'
        description='test description'
        image='src'
        alt='test alternative text'
      >
        <h1>
          test h1
        </h1>
        <p>
          test paragraph
        </p>
      </CardProject>
    )
  })

  test('renders filled props', () => {
    component.getByText('test title')
    component.getByText('test description')
    component.getByRole('img', { name: 'test alternative text' })
  })

  /* test('show childrens must be hidden by default', () => {
    let h1 = component.getByText('test h1')
    let parent = h1.parentNode
    // expect(parent).not.toBeVisible()
  }) */
})

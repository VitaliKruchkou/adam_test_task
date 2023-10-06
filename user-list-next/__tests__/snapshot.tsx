/**
 * @jest-environment jsdom
 */
import Home from '@/components/screens/home/Home'
import { render } from '@testing-library/react'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

it('renders homepage unchanged', () => {
  const { container } = render(<Home users={[]} />)
  expect(container).toMatchSnapshot()
})

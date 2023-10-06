import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react'
import Home from '@/components/screens/home/Home'
import axios, { AxiosResponse } from 'axios'
import { User } from '@/interfaces/user.interface'
import { UsersQuery } from '@/queries'

afterEach(cleanup)

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Home', () => {
  it('should have input', async () => {
    render(<Home users={[]} />)

    await waitFor(() => {
      const input = screen.getByLabelText('cost-input') as HTMLInputElement
      expect(input).toBeInTheDocument()

      fireEvent.change(input, { target: { value: 'test' } })
      expect(input.value).toBe('test')
    })
  })
  it('should have not found', async () => {
    render(<Home users={[]} />)

    await waitFor(() => {
      const elem = screen.getByText('User not found')
      expect(elem).toBeInTheDocument()
    })
  })
  it('should have user list', async () => {
    render(
      <Home
        users={[
          {
            id: 1,
            first_name: 'Leanne',
            last_name: 'Graham',
            email: 'Sincere@april.biz',
            dateOfBirth: '01.01.1980',
            image: 'http://placekitten.com/201/300',
            additionalInformation: {
              phone: '1-770-736-8031 x56442',
              address: 'Kulas Light',
            },
          },
        ]}
      />,
    )

    await waitFor(() => {
      const elem = screen.getByRole('heading', {
        name: 'Leanne Graham',
      })
      expect(elem).toBeInTheDocument()
    })
  })
  it('should return users list', async () => {
    const users: User[] = [
      {
        id: 1,
        first_name: 'Leanne',
        last_name: 'Graham',
        email: 'Sincere@april.biz',
        dateOfBirth: '01.01.1980',
        image: 'http://placekitten.com/201/300',
        additionalInformation: {
          phone: '1-770-736-8031 x56442',
          address: 'Kulas Light',
        },
      },
      {
        id: 2,
        first_name: 'Ervin ',
        last_name: 'Howell',
        email: 'Shanna@melissa.tv',
        dateOfBirth: '02.01.1980',
        image: 'http://placekitten.com/202/300',
        additionalInformation: {
          phone: '010-692-6593 x09125',
          address: 'Victor Plains',
        },
      },
    ]

    const mockedResponse: Omit<AxiosResponse, 'config'> = {
      data: users,
      status: 200,
      statusText: 'OK',
      headers: {},
    }

    mockedAxios.get.mockResolvedValueOnce(mockedResponse)

    expect(axios.get).not.toHaveBeenCalled()
    const data = await UsersQuery.getAllUsers()
    expect(axios.get).toHaveBeenCalled()
    expect(data).toEqual(users)
  })
})

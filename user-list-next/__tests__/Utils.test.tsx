import { getFullName, getFullYear } from '@/utils'

describe('Utils', () => {
  it('should return full year', () => {
    const fullYear = getFullYear()
    expect(fullYear).toBe(new Date().getFullYear())
  })
  it('should return full name', () => {
    const fullName = getFullName({
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
    })
    expect(fullName).toBe('Leanne Graham')
  })
  it('should return error fullName', () => {
    const fullName = getFullName({
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
    })
    expect(fullName).not.toBe('Leanne Graham Leaenn')
  })
})

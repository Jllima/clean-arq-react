import React from 'react'
import { render } from '@testing-library/react'
import { Login } from '@/presentation/pages'

describe('Login Component', () => {
  test('Shold not render spinner and error message on start', () => {
    const { getByTestId } = render(<Login/>)
    const errorWrap = getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
  })
})

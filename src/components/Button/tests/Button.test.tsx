import { Button } from '../../index'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

describe('tests for component Button', () => {
  const Component = ({ children = 'Click me!', ...args }) => <Button {...args}>{children}</Button>

  // props
  describe('should be rendered correctly', () => {
    test('variant bordered', () => {
      render(<Component variant='bordered' />)
      const button = screen.getByText('Click me!')
      expect(button.classList.contains('bui-btn-variant_bordered')).toBeTruthy()
    })

    test('size large', () => {
      const { container } = render(<Component size='large' />)
      const button = container.querySelector('button')
      expect(button.classList.contains('bui-btn-size_large')).toBeTruthy()
    })

    test('button disabled', () => {
      const { asFragment } = render(<Component disabled />)
      expect(asFragment()).toMatchSnapshot()
    })
  })

  // onClick & disabled
  describe('should be clickable', () => {
    test('on click button active', () => {
      const onClick = jest.fn()
      render(<Component onClick={onClick} />)
      fireEvent.click(screen.getByText('Click me!'))
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    test('on click button disabled', () => {
      const onClick = jest.fn()
      render(<Component onClick={onClick} disabled />)
      fireEvent.click(screen.getByText('Click me!'))
      expect(onClick).not.toHaveBeenCalled()
    })
  })

  // snapshots
  describe('should be mounted', () => {
    const onClick = jest.fn()
    test('mounted active button', () => {
      const { asFragment } = render(
        <Component onClick={onClick} size='small' variant='bordered'>
          Active button
        </Component>,
      )
      expect(asFragment()).toMatchSnapshot()
    })

    test('mounted disabled button', () => {
      const { asFragment } = render(
        <Component onClick={onClick} size='middle' variant='filled' disabled>
          Disabled button
        </Component>,
      )
      expect(asFragment()).toMatchSnapshot()
    })
  })
})

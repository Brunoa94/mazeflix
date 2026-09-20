import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'

describe('Button', () => {
  it('renders slot content', () => {
    const wrapper = mount(Button, {
      props: { ariaLabel: 'Submit' },
      slots: { default: 'Click me' },
    })

    expect(wrapper.text()).toBe('Click me')
  })

  it('sets aria-label', () => {
    const wrapper = mount(Button, {
      props: { ariaLabel: 'Submit form' },
      slots: { default: 'Submit' },
    })

    expect(wrapper.attributes('aria-label')).toBe('Submit form')
  })

  it('disables button when disabled prop is true', () => {
    const wrapper = mount(Button, {
      props: { ariaLabel: 'Submit', disabled: true },
      slots: { default: 'Submit' },
    })

    expect(wrapper.attributes('disabled')).toBeDefined()
  })
})

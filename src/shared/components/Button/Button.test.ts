import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'

describe('the Button component', () => {
  const wrapper = mount(Button, {
    props: { ariaLabel: 'Submit form' },
    slots: { default: 'Submit' },
  })

  it('renders slot content', () => {
    expect(wrapper.text()).toBe('Submit')
  })

  it('sets aria-label', () => {
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

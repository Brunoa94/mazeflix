import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Heading from './Heading.vue'

describe('Heading', () => {
  it('renders slot content', () => {
    const wrapper = mount(Heading, {
      slots: { default: 'My Title' },
    })

    expect(wrapper.text()).toBe('My Title')
  })

  it('renders as h2 by default', () => {
    const wrapper = mount(Heading, {
      slots: { default: 'Title' },
    })

    expect(wrapper.get('h2').text()).toBe('Title')
  })

  it('renders as h1 when specified', () => {
    const wrapper = mount(Heading, {
      props: { as: 'h1' },
      slots: { default: 'Title' },
    })

    expect(wrapper.get('h1').text()).toBe('Title')
  })
})

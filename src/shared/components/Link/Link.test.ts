import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Link from './Link.vue'

describe('the Link component', () => {
  it('renders as RouterLink for internal navigation', () => {
    const wrapper = mount(Link, {
      props: { ariaLabel: 'View details', to: '/show/1' },
      global: { stubs: { RouterLink: true } },
    })

    expect(wrapper.findComponent({ name: 'RouterLink' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'RouterLink' }).attributes('to')).toBe('/show/1')
  })

  it('renders as anchor tag for external navigation', () => {
    const wrapper = mount(Link, {
      props: { ariaLabel: 'Visit website', to: 'https://example.com', isExternal: true },
      global: { stubs: { RouterLink: true } },
    })

    expect(wrapper.find('a').exists()).toBe(true)
    expect(wrapper.find('a').attributes('href')).toBe('https://example.com')
  })
})

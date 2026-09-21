import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Text from './Text.vue'

describe('the Text component', () => {
  it('renders slot content', () => {
    const wrapper = mount(Text, {
      props: { as: 'p' },
      slots: { default: 'Hello World' },
    })

    expect(wrapper.text()).toBe('Hello World')
  })

  it('renders as p element', () => {
    const wrapper = mount(Text, {
      props: { as: 'p' },
      slots: { default: 'Text' },
    })

    expect(wrapper.get('p').text()).toBe('Text')
  })

  it('renders as span element', () => {
    const wrapper = mount(Text, {
      props: { as: 'span' },
      slots: { default: 'Text' },
    })

    expect(wrapper.get('span').text()).toBe('Text')
  })
})

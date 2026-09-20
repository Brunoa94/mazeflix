import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SplitTitle from './SplitTitle.vue'

describe('SplitTitle', () => {
  it('renders title with last word in accent span', () => {
    const wrapper = mount(SplitTitle, {
      props: { title: 'Hello World' },
    })

    expect(wrapper.text()).toContain('Hello')
    expect(wrapper.find('span').text()).toBe('World')
  })

  it('splits single word at midpoint', () => {
    const wrapper = mount(SplitTitle, {
      props: { title: 'Mazeflix' },
    })

    expect(wrapper.text()).toContain('Maze')
    expect(wrapper.find('span').text()).toBe('flix')
  })
})

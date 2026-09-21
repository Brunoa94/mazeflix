import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SplitTitle from './SplitTitle.vue'

describe('the SplitTitle component', () => {
  it('shows title with last word in accent span', () => {
    const wrapper = mount(SplitTitle, {
      props: { title: 'Hello World' },
    })

    expect(wrapper.text()).toContain('Hello')
    expect(wrapper.find('span').text()).toBe('World')
  })

  it('shows single word if just one', () => {
    const wrapper = mount(SplitTitle, {
      props: { title: 'Mazeflix' },
    })

    expect(wrapper.text()).toContain('Mazeflix')
    expect(wrapper.find('h1').text()).toBe('Mazeflix')
  })
})

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Chip from './Chip.vue'

describe('the Chip component', () => {
  const wrapper = mount(Chip, {
    slots: { default: 'Drama' },
  })

  it('renders slot content', () => {
    expect(wrapper.text()).toBe('Drama')
  })

  it('renders as span element', () => {
    expect(wrapper.get('span')).toBeDefined()
  })
})

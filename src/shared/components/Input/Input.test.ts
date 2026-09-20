import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Input from './Input.vue'

describe('the Input component', () => {
  it('shows the correct placeholder', () => {
    const wrapper = mount(Input, {
      props: { ariaLabel: 'Search', placeholder: 'Type here...' },
    })

    expect(wrapper.find('input').attributes('placeholder')).toBe('Type here...')
  })

  it('sets aria-label', () => {
    const wrapper = mount(Input, {
      props: { ariaLabel: 'Search input', placeholder: 'Search...' },
    })

    expect(wrapper.find('input').attributes('aria-label')).toBe('Search input')
  })

  it('disables input when disabled prop is true', () => {
    const wrapper = mount(Input, {
      props: { ariaLabel: 'Search', placeholder: 'Search...', disabled: true },
    })

    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('updates v-model value on input', async () => {
    const wrapper = mount(Input, {
      props: { ariaLabel: 'Search', placeholder: 'Search...' },
    })

    await wrapper.find('input').setValue('test query')

    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['test query'])
  })
})

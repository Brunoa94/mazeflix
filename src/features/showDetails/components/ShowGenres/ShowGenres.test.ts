import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ShowGenres from './ShowGenres.vue'

describe('the ShowGenres component', () => {
  it('shows all props genres', () => {
    const wrapper = mount(ShowGenres, {
      props: { genres: ['Drama', 'Comedy', 'Action'] },
    })

    expect(wrapper.text()).toContain('Drama')
    expect(wrapper.text()).toContain('Comedy')
    expect(wrapper.text()).toContain('Action')
  })

  it('show nothing when genres is empty', () => {
    const wrapper = mount(ShowGenres, {
      props: { genres: [] },
    })

    expect(wrapper.find('div').exists()).toBe(false)
  })
})

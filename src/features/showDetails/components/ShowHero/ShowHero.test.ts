import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ShowHero from './ShowHero.vue'
import ShowHeroDetails from './ShowHeroDetails.vue'
import { createMockShow } from '@/shared/mock/createMockShow'

describe('the ShowHero component', () => {
  const show = createMockShow(1, 'Breaking Bad')

  it('shows the show title', () => {
    const wrapper = mount(ShowHero, {
      props: { show },
    })

    expect(wrapper.get('h1').text()).toBe('Breaking Bad')
  })

  it('shows the show background image', () => {
    const wrapper = mount(ShowHero, {
      props: { show },
    })

    expect(wrapper.element.style.backgroundImage).toBe('url("https://example.com/original.jpg")')
  })

  it('shows the show details', () => {
    const wrapper = mount(ShowHero, {
      props: { show },
    })

    const details = wrapper.getComponent(ShowHeroDetails)

    expect(details.props('show')).toEqual(show)
  })
})

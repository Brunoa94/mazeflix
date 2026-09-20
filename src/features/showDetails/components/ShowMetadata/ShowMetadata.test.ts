import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ShowMetadata from './ShowMetadata.vue'
import MetadataItem from './MetadataItem.vue'
import Text from '@/shared/components/Text/Text.vue'
import { createMockShow } from '@/shared/mock/createMockShow'

describe('the ShowMetadata component', () => {
  const show = createMockShow(1, 'Breaking Bad')

  it('shows the show summary', () => {
    const wrapper = mount(ShowMetadata, {
      props: { show },
    })

    const summary = wrapper.getComponent(Text)
    expect(summary.text()).toBe(show.summary)
  })

  it('shows the show network', () => {
    const wrapper = mount(ShowMetadata, {
      props: { show },
    })

    const network = wrapper
      .findAllComponents(MetadataItem)
      .find((item) => item.props('label') === 'NETWORK')

    expect(network?.props()).toEqual({ label: 'NETWORK', value: 'AMC' })
  })

  it('shows the show web channel', () => {
    const wrapper = mount(ShowMetadata, {
      props: { show },
    })

    const webChannel = wrapper
      .findAllComponents(MetadataItem)
      .find((item) => item.props('label') === 'WEB CHANNEL')

    expect(webChannel?.props()).toEqual({ label: 'WEB CHANNEL', value: 'Netflix' })
  })
})

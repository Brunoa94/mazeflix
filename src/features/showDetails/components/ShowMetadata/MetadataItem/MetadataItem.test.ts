import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import MetadataItem from './MetadataItem.vue'

describe('the MetadataItem component', () => {
  it('shows the label and value', () => {
    const wrapper = mount(MetadataItem, {
      props: { label: 'NETWORK', value: 'AMC' },
    })

    expect(wrapper.get('span').text()).toBe('NETWORK')
    expect(wrapper.get('p').text()).toBe('AMC')
  })
})

import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ScheduleItem from './ScheduleItem.vue'
import Text from '@/shared/components/Text/Text.vue'
import Heading from '@/shared/components/Heading/Heading.vue'

describe('the ScheduleItem component', () => {
  it('shows the schedule label and days with time', () => {
    const wrapper = mount(ScheduleItem, {
      props: {
        schedule: {
          days: ['Sundays'],
          time: '21:00',
        },
      },
    })

    const heading = wrapper.findAllComponents(Heading).filter((h) => h.props('as') === 'h3')
    expect(heading).toHaveLength(1)
    expect(heading.at(0)?.text()).toBe('Schedule')

    const listItems = wrapper.findAllComponents(Text).filter((t) => t.props('as') === 'li')
    const allTexts = listItems.map((item) => item.text())

    expect(listItems).toHaveLength(1)
    expect(allTexts).toContainEqual('Sundays at 21:00')
  })

  it('shows multiple days with time', () => {
    const wrapper = mount(ScheduleItem, {
      props: {
        schedule: {
          days: ['Monday', 'Wednesday'],
          time: '20:00',
        },
      },
    })

    const listItems = wrapper.findAllComponents(Text).filter((t) => t.props('as') === 'li')
    const allTexts = listItems.map((item) => item.text())

    expect(listItems).toHaveLength(2)

    expect(allTexts).toContainEqual('Monday at 20:00')
    expect(allTexts).toContainEqual('Wednesday at 20:00')
  })
})

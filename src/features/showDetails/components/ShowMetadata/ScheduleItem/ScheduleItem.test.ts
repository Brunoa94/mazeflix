import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ScheduleItem from './ScheduleItem.vue'

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

    expect(wrapper.get('h3').text()).toBe('Schedule')
    expect(wrapper.get('p').text()).toBe('Sundays at 21:00')
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

    const paragraphs = wrapper.findAll('p')
    expect(paragraphs).toHaveLength(2)
    expect(paragraphs.at(0)?.text()).toBe('Monday at 20:00')
    expect(paragraphs.at(1)?.text()).toBe('Wednesday at 20:00')
  })
})

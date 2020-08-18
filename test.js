import {mount} from '@vue/test-utils'
import User from './user'
import User2 from './user2'
import waitForExpect from "wait-for-expect";
import flushPromises from "flush-promises/index";

describe('user', () => {
    it('should update rendered html after user.name fetched', async () => {
        // mount component that includes user fetching
        const wrapper = mount(User, {
            propsData: {
                value: {
                    name: 'undefined_name',
                },
            }
        })
        await flushPromises()
        expect(wrapper.text()).toContain('fetched_name')
        // test component's html
        // await waitForExpect(() => {
        //     expect(wrapper.text()).toContain('fetched_name')
        // })
    })

    it('should update rendered html after plain user fetched', async () => {
        // mount component that includes user fetching
        const wrapper = mount(User2, {
            propsData: {
                value: 'undefined_name',
            }
        })
        await flushPromises()
        expect(wrapper.text()).toContain('fetched_name')
    })
})

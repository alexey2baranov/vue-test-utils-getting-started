import {mount} from '@vue/test-utils'
import User from './user'
import flushPromises from "flush-promises/index";
import waitForExpect from "wait-for-expect";

describe('user', () => {
    it('should update rendered html after user.name fetched', async () => {
        const user = {
            name: 'undefined_name'
        }

        // mount component that includes user fetching
        const wrapper = mount(User, {
            propsData: {
                value: user,
            }
        })
        await flushPromises()
        expect(wrapper.text()).toContain('undefined_name')

        console.log('emulating fetching user data ...')
        await new Promise(resolve => setTimeout(resolve, 0))
        user.name = 'fetched_name'
        console.log('user updated')

        await flushPromises()
        expect(wrapper.text()).toContain('fetched_name')
    })
})

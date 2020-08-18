import {mount} from '@vue/test-utils'
import User from './user'
import waitForExpect from "wait-for-expect";
import flushPromises from "flush-promises/index";

describe('user', () => {
    // create user with undefined name
    const user = {
        name: 'undefined_name',
    }

    it('should update rendered html after user fetched', async () => {
        // mount component that includes user fetching
        const wrapper = mount(User, {
            propsData: {
                value: user,
            }
        })
        await flushPromises()
        expect(wrapper.text()).toContain('fetched_name')
        // test component's html
        // await waitForExpect(() => {
        //     expect(wrapper.text()).toContain('fetched_name')
        // })
    })
})

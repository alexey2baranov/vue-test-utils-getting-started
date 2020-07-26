import {mount} from "@vue/test-utils";
import router from "./router";
import AppVue from "./AppVue";

let wrapper

beforeEach(async () => {
    wrapper = mount(AppVue, {
        router,
    })
})

it('redirecting inside beforeEach guard', async () => {
    await wrapper.vm.$router.push({name: 'protected'})
    expect(wrapper.vm.$route.name).toBe('public')
})

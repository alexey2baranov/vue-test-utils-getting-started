import {mount} from "@vue/test-utils";
import KApp from "./src/App.js";
// import AppVue from "./src/AppVue";
import router from "./router";
let wrapper

beforeEach(async () => {
    wrapper = mount(KApp, {
        router,
    })
})

it('redirecting inside beforeEach guard', async () => {
    await wrapper.vm.$router.push({name: 'private'})
    expect(wrapper.vm.$route.name).toBe('public')
})

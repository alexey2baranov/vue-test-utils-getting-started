// counter.js

export default {
    template: `
        <div>user name: {{ value.name }}</div>
    `,
    props: {
        value: {
            required: true,
        }
    },
    async mounted() {
        // fetch user emulation
        console.log('user fetching...')
        // await new Promise(resolve => setTimeout(resolve, 1000))
        this.value.name = 'fetched_name'
        console.log('user fetched')
    }
}

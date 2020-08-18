// counter.js

export default {
    template: `
      <div>user name: {{ value }}</div>
    `,
    props: {
        value: {
            required: true,
        }
    },
    async mounted() {
        // fetch user emulation
        console.log('user fetching...')
        this.value = 'fetched_name'
        console.log('user fetched')
    }
}

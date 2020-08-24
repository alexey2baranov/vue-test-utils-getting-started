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
    }
}

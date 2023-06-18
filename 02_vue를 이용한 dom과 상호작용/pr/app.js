const app = Vue.createApp({
    data() {
        return {
            name: 'ShinDain',
            age: 28,
            showImage:
                'https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVwcHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        };
    },
    methods: {
        plusAge() {
            return this.age + 5;
        },
        randomNum() {
            return Math.random();
        },
    },
});
app.mount('#assignment');

const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            confirmedName: '', // 실제로 출력되는 이름
        };
    },
    methods: {
        submitForm(event) {
            alert('Submitted');
        },
        setName(event, lastName) {
            this.name = event.target.value + ' ' + lastName;
        },
        confirmInput() {
            this.confirmedName = this.name;
        },
        add(num) {
            this.counter += num;
        },
        reduce(num) {
            this.counter -= num;
        },
    },
});

app.mount('#events');

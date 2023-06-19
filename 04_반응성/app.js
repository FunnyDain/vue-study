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
        setName(event) {
            this.name = event.target.value;
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
        resetInput() {
            this.name = '';
        },
    },
});

app.mount('#events');

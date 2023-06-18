const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            confirmedName: '', // 실제로 출력되는 이름
        };
    },
    methods: {
        // 방법1.
        submitForm(event) {
            // 브라우저의 기본값을 방지
            // event.preventDefault();
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

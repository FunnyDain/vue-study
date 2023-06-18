const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
        };
    },
    methods: {
        setName(event, lastName) {
            // 이벤트가 발생할 때 실행될 함수를 가리키면
            // 그 함수는 브라우저가 제공하는 인수를 얻게 된다 = event
            // 이 이벤트 객체는 이벤트 정보로 가득하다.
            // event.target.value : 사용자가 입력한 현재 값
            this.name = event.target.value + ' ' + lastName;
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

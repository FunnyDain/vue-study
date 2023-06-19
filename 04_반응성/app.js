const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
        };
    },
    methods: {
        // 이름외 다른 내용을 추가하기 위한 메서드
        // 여기서 문제는 카운트 버튼을 누르면 vue가 이 메서드도 재실행시킨다는 것
        // vue는 메서드가 하는 일을 모르기 때문에 counter가 사용되는 지 여부는 모르기때문에
        // 냅다 이 메서드도 실행시키는 것
        // 이러한 이유로 vue는 이벤트에 바인딩 되지 않은 html 코드 내에 있는 모든 메서드를 재실행시킴
        // 비록 이 메서드가 counter를 사용하지 않는 다는 것을 내가 알지라도
        // 이는 성능면에서 좋지 않다.
        outputFullname() {
            console.log('Running again');
            if (this.name === '') return '';
            else return this.name + ' ' + '입니다.';
        },
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

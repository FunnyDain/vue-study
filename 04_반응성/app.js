const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
        };
    },
    computed: {
        // computed에서 정의한 메서드는 일반 메서드와 다른 방식으로 호출되고 실행
        // outputFullname이라고 하지 않는 이유는 메서드가 아니라 데이터 프로퍼티처럼 사용되기 때문 (기술적으로는 메서드)
        // 메서드처럼 사용하지 않고 호출하지도 x
        fullname() {
            // 앱이 처음 화면에 렌더링될 때를 제외하곤 삭제하고 카운터를 변경해도 표시되지 x
            console.log('Running again');
            if (this.name === '') return '';
            else return this.name + ' ' + '입니다.';
        },
    },
    methods: {
        // 이를 위한 해결방법 : 연산(computed) 프로퍼티
        // 연산 프로퍼티는 메서드와 다른 점은
        // vue가 의존성을 인식하고 의존성 중 하나가 변경된 경우에만 재실행
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

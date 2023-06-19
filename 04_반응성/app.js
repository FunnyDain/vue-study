const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            fullname: '',
            lastName: '',
        };
    },
    watch: {
        // 감시자 메서드명은 데이터 프로퍼티나 연산 프로퍼티에서 사용한 이름을 사용할 수 있다.
        // 데이터 프로퍼티의 name
        // 데이터 프로퍼티의 name이 변경될 때마다 감시자 메서드 vue에 의해 재실행
        // 즉, name프로퍼티 감시
        name(value) {
            // return되는 값은 없다.
            // this.fullname = this.name + ' ' + 입니다.
            // 여기서 this.name를 굳이 참조할 필요가 없는 게
            // 감시자 함수는 watch프로퍼티의 마지막 값을 인수로 가져온다.
            if (value === '') this.fullname = '';
            else this.fullname = value + ' ' + this.lastName;

            // value외에 두번째 인수를 받아들일 수도 있다.
            // 두번째 인수는 watch프로퍼티의 이전 값
            // 즉, name(newValue, oldValue)
            // 이제 name이 변경될 때마다 fullname도 업데이트
        },
        lastName(value) {
            if (value === '') this.fullname = '';
            else this.fullname = this.name + ' ' + value;
        },

        counter(value) {
            if (value > 50) {
                // 데이터 프로퍼티를 업데이트하지만
                // 항상 업데이트해선 안 되는 로직을 실행하려는 경우
                // 가령 50을 초과하는 경우에만 카운터를 0으로 설정하려고 한다면
                // 연산 프로퍼티보다 watch사용
                // 다른 예로 특정 데이터가 변경되면 보내는 http요청이나
                // 특정 값이 변경되면 설정하는 타이머
                // 정리하자면 모든 프로퍼티 변화가 아닌 일부 프로퍼티의 변화에 반응하여
                // 데이터 프로퍼티를 업데이트하려는 경우 감시자가 유용
                // 출력값을 동적으로 계산할 때는 연산 프로퍼를 사용
                this.counter = 0;
            }
        },
    },

    //연산 프로퍼티도 두 개의 의존성을 사용하도록 수정
    // 두 개의 의존성을 참조
    // watch 주석하고 test 꼭 해보기
    // 원하는 대로 작동하고 watch보다 코드가 많지 x
    computed: {
        // fullname() {
        //     console.log('Running again');
        //     if (this.name === '' || this.lastName === '') return '';
        //     else return this.name + ' ' + this.lastName;
        // },
    },
    methods: {
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

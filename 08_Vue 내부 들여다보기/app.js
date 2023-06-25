// vue앱을 html 코드의 dom내 특정 위치에 마운트할 때면
// 해당 html코드 부분을 vue앱의 템플릿으로 지정하게 됨

const app = Vue.createApp({
    data() {
        // data에 대해 vue가 하는 작업 중 가장 핵심적인 일은 data객체를 반응형 data객체로 바꾸는 일
        // 프로퍼티를 js의 기능인 프록시로 래핑하여
        // vue는 프로퍼티의 새로운 값이 할당될 때마다 알게 된다.
        // vue는 제어하는 html코드를 스캔하고 변경사항에 따라 화면에 나오는 페이지를 업데이트
        return {
            currentUserInput: '',
            message: 'Vue is great!',
        };
    },
    methods: {
        saveInput(event) {
            this.currentUserInput = event.target.value;
        },
        setText() {
            this.message = this.currentUserInput;
        },
    },
});

app.mount('#app');

// 프록시란?
const data = {
    message: 'Hello!',
    longMessage: 'Hello! Dain!',
};

const handler = {
    // handler내에 set함수를 추가하면 자동으로 target, key, value를 인수로 전송 받는다.
    // setter함수는 proxy에 새로운 프로퍼티가 설정될 때마다 트리거됨
    // 래핑된 원본 객체가 무엇인지, 설정된 새 값이 무엇인지 알수 있음
    set(target, key, value) {
        console.log(target); //래핑된 객체 data가 출력, message: 'Hello!'
        console.log(key); //message
        console.log(value); //Hello!!!!!!!!!!!!! 새로 설정한 값이 출력
        if (key === 'message') {
            target.longMessage = value + ' Dain!';
        }
        target.message = value;
    },
};

// data객체를 new Proxy를 통해 js proxy로 래핑
// 두번째 인수는 래핑된 객체(data)에 대한 핸들러를 담고 있는 객체
const proxy = new Proxy(data, handler);

// 따라서 proxy를 통해 message에 엑세스 가능
proxy.message = 'Hello!!!!!!!!!!!!!';

console.log(proxy.longMessage); //message설정으로 longMessage가 업데이트

//=> 이런 반응형 작업을 vue가 내부적으로 함

const app2 = Vue.createApp({
    // vue앱에 템플릿을 추가할 때
    // 앱 구성 객체에 template옵션 사용 가능
    template: `
  <p>{{favoriteMeal}}</p>
  `,
    data() {
        return {
            favoriteMeal: 'Meat',
        };
    },
});
app2.mount('#app2');

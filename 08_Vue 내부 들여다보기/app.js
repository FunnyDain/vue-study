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
            // this.message = this.currentUserInput;
            // vue가 지원하는 모든 프로퍼티는 $로 시작
            // 이렇게 하면 해당 input요소의 dom 객체를 가리키는 것이 되고,
            // dom 요소에 액세스할 때, 순수 js에서도 사용할 수 있는 js객체가 됨

            console.log(this.$refs.userText); //<input type="text">로 전체 input요소가 찍힘
            // this.message = this.$refs.userText;

            console.dir(this.$refs.userText); //출력한 객체는 event.target을 통해 액세스한 것과 동일한 객체
            // 찍어보면 value프로퍼티에도 액세스 가능
            // setText가 실행되었을 때만 이루어지는 작업

            // 이전과 같이 잘 작동
            // 이제 모든 키 입력을 출력하는 것이 아니라 ref 기능을 통해 필요할 때만 추출해서 쓸 수 있게 됨
            this.message = this.$refs.userText.value;
        },
    },
    beforeCreate() {
        console.log('beforeCreate()');
        // 서버에 http 요청을 전송하거나 타이머를 설정하는 등
    },
    created() {
        console.log('created()');
    },
    beforeMount() {
        console.log('beforeMount()');
    },
    mounted() {
        console.log('mounted()'); // vue앱이 화면에 마운트된 상태이기 때문에 source에서 찍고 새로고침을 해보면 브라우저에 내용이 보이기 시작
    },
    beforeUpdate() {
        console.log('beforeUpdate()');
    },
    updated() {
        console.log('updated()'); // 화면에 변경된 것이 보임
    },
    beforeUnmount() {
        console.log('beforeUnmount()');
    },
    unmounted() {
        console.log('unmounted()');
    },
});

app.mount('#app');

// 3초 후에 mount해제
setTimeout(() => {
    app.unmount();
}, 3000);

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

// vue instance 생명주기
// 1. createApp : 앱 생성, html코드, 즉 dom에 mount메서드로 마운트해줌
// 2. beforecreate() : 앱이 완전히 초기화되기 이전에 호출
// 3. created() : 시작된 이후 호출, 이 시점까지는 화면에 표시되는 것이 아무것도 x
// 4. Compile template : 모든 동적 플레이스홀더와 보간 등이 제거되고 사용자에게 표시될 구체적 값으로 대체되는 단계
// 5. beforeMount() : vue가 화면에 무엇가 표시되기 직전 단계
// 6. mounted() : 화면에 뭔가 나타나기 시작, vue앱이 초기화되고 템플릿도 컴파일을 마침
// vue가 화면에 표시할 대상을 인지하고 브라우저에 지시 사항을 넘겨 브라우저는 이에 따라 모든 컨텐츠가 있는 html요소를 추가
// 7. Mounted Vue instance
// 8. Data Changed :  vue앱에서 데이터에 대한 변경 사항이 발생시
// 9. beforeUpdate() : vue가 앱 내에서 업데이트를 완전히 처리하지 않았을 때에 대한 단계
// 10. updated() : 해당 처리가 완료되었을 때에 대한 단계
// 11. instance Unmounted : 가끔 vue 앱이 instance Unmounted 마운팅 해제되는 경우도 있다. 그럴 경우
// 12. beforeUnmount() : 콘텐츠 삭제 직전에 실행
// 13. unmounted() : 콘텐츠 삭제 후 실행

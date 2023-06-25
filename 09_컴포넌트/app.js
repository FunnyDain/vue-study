const app = Vue.createApp({
    data() {
        return {
            // detailsAreVisible: false,
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com',
                },
                {
                    id: 'Julie',
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com',
                },
            ],
        };
    },
    methods: {
        /*         toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }, */
    },
});

// vue에 새 컴포넌트를 생성하고 싶다고 알려주는 것
// 두 개의 인수를 갖는다.
// 1. 식별자 : 컴포넌트는 기본적으로 커스텀 html 요소이기 때문에 커스텀 html 태그를 정의해줘야함
// 항상 대시기호 (-)를 포함한 식별자를 사용해야 함
// 공식 내장 html 요소와 충돌되는 일을 막기 위함
// 2. createApp에 전달한 것과 같은 구성 객체
// vue컴포넌트는 본질적으로 vue앱과 같다.
// 다만 메인 앱에 연결될 앱
// 여기서는 컴포넌트를 마운트하거나 호출하지 x
app.component('friend-contact', {
    // 이 컴포넌트의 템플릿이 필요하다.
    // template옵션추가
    // 좋은 방법은 아님, 다음 섹션에서...
    template: `
        <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails()">
            {{detailsAreVisible ? 'Hide' : 'Show'}}
        </button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone: </strong>{{friend.phone}}</li>
            <li><strong>Email: </strong> {{friend.email}}</li>
        </ul>
    </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '01234 5678 991',
                email: 'manuel@localhost.com',
            },
        };
    },
    methods: {
        // 컴포넌트 전용 메서드를 통해 컴포넌트 전용 데이터를 전환
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
    },
});

app.mount('#app');

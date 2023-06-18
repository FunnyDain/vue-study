const app = Vue.createApp({
    // app객체의 property로 data는 key, value로는 함수를 갖는다.
    // data는 그 자체로 함수이자 메서드
    // data: function(){}
    //  단축가능
    data() {
        //항상 객체를 반환한다.
        return {
            courseGoal: 'Finish the course and learn Vue!',
            vueLink: 'https://vuejs.org',
        };
    },
    // methods는 메서드 및 함수로 만들어진 객체를 가진다.
    methods: {
        outputGoal: function () {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 'Learn Vue!';
            } else {
                return 'Master Vue!';
            }
        },
    },
});
app.mount('#user-goal');

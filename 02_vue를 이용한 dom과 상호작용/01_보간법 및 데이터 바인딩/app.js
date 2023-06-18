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
});

app.mount('#user-goal');

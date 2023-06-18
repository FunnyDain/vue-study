const app = Vue.createApp({
    // app객체의 property로 data는 key, value로는 함수를 갖는다.
    // data는 그 자체로 함수이자 메서드
    // data: function(){}
    //  단축가능
    data() {
        //항상 객체를 반환한다.
        return {
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'Master Vue and build amazing apps!!',
            vueLink: 'https://vuejs.org',
        };
    },
    // methods는 메서드 및 함수로 만들어진 객체를 가진다.
    methods: {
        outputGoal: function () {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                // return courseGoalA하면 안됌
                // this키워드는 vue덕분에 data가 반환하는 객체를 참조하는 것
                // 이 객체는 createApp가 관리하는 모든 영역에서 사용 가능
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        },
    },
});
app.mount('#user-goal');

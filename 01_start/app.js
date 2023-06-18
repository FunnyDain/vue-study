Vue.createApp({
    // data: function(){}

    data() {
        //객체를 반환해야함
        return {
            goals: [],
            enteredValue: '',
        };
    },

    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            //입력란을 지우고 싶다면
            this.enteredValue = '';
            git;
        },
    },
}).mount('#app');

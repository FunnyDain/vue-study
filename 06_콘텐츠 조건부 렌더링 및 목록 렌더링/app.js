const app = Vue.createApp({
    data() {
        return {
            // 사용자가 입력창에 입력한 모든 내용을 저장
            enteredGoalValue: '',
            goals: [],
        };
    },
    methods: {
        addGoals() {
            this.goals.push(this.enteredGoalValue);
        },
    },
});

app.mount('#user-goals');

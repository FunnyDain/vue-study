const app = Vue.createApp({
    data() {
        return {
            enteredValue: '',
            tasks: [],
            taskListVisible: true,
        };
    },
    computed: {
        buttonCaption() {
            return this.taskListVisible ? 'Hide' : 'Show List';
        },
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredValue);
        },
        toggleTaskList() {
            this.taskListVisible = !this.taskListVisible;
        },
    },
});

app.mount('#assignment');

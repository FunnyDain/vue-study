const app = Vue.createApp({
    data() {
        return {
            number: 0,
        };
    },
    methods: {
        addNumber(num) {
            console.log(num);
            this.number += num;
            console.log(this.number);
        },
    },
    computed: {
        result() {
            if (this.number < 37) {
                return 'Not there yet!';
            } else if (this.number === 37) {
                return this.number;
            } else {
                return 'Too much';
            }
        },
    },
    watch: {
        result(value) {
            console.log('Watcher executing...');
            const that = this;
            setTimeout(() => {
                that.number = 0;
            }, 5000);
        },
    },
});

app.mount('#assignment');

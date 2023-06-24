const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        };
    },
    // 복잡한 동적 클래스 코드가 많으면 특히 유용, 복잡하지 않으면 html에 적어도 ㄱㅊ
    computed: {
        boxAClasses() {
            return { active: this.boxASelected };
        },
    },
    methods: {
        // box : 입력값으로 어떤 박스가 선택되었는지 나타내는 식별자
        // toggle 될 수 있게
        boxSelected(box) {
            if (box === 'A') {
                this.boxASelected = !this.boxASelected;
            } else if (box === 'B') {
                this.boxBSelected = !this.boxBSelected;
            } else if (box === 'C') {
                this.boxCSelected = !this.boxCSelected;
            }
        },
    },
});

app.mount('#styling');

// 이 함수는 js코드 내에서만 호출되고,
// vue가 제어하는 데이터 프로퍼티 등은 사용하지 않을 것이며
// template,즉, html코드에서도 호출되지 않을 것이기 때문

function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: [],
        };
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterHealth < 0) {
                return { width: '0%' };
            }
            return { width: this.monsterHealth + '%' };
        },
        playerBarStyles() {
            if (this.playerHealth < 0) {
                return { width: '0%' };
            }
            return { width: this.playerHealth + '%' };
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        },
    },
    // 변화를 감지하고 그에 따라 반응하는 작업을 해주는 기능
    watch: {
        // watch에 들어갈 이름은 앞으로 감시할 프로퍼티 이름이어야함
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                // A draw : 무승부
                this.winner = 'draw';
            } else if (value <= 0) {
                // Player lost
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                // A draw
                this.winner = 'draw';
            } else if (value <= 0) {
                // Monster lost
                this.winner = 'player';
            }
        },
    },
    methods: {
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.logMessages = [];
        },
        attackMonster() {
            this.currentRound++;
            // 피해량 최소 5 최대 12
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.addLogMessage('player', 'attack', attackValue);
            // 하단의 메서드 호출
            // this 키워드를 사용하면 데이터 프로퍼티도 액세스 할 수 있고,
            // vue 인스턴스 구성 객체 내의 메서드도 액세스 가능
            this.attackPlayer();
        },
        attackPlayer() {
            // 피해량 최소 8 최대 15
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
            this.addLogMessage('monster', 'attack', attackValue);
        },
        // 세 턴마다 한번씩만 사용 가능한 강력한 공격
        specialAttackMonster() {
            const attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.addLogMessage('player', 'attack', attackValue);
            // 몬스터 반격
            this.attackPlayer();
        },
        healPlayer() {
            this.currentRound++;
            const healValue = getRandomValue(8, 20);
            // 체력이 100이 넘어가면 안됌
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }

            this.addLogMessage('player', 'heal', healValue);
            // 회복을 할 때도 몬스터가 플레이어를 공격
            this.attackPlayer();
        },
        // 항복
        surrender() {
            this.winner = 'monster';
        },
        // 전투 기록이 화면에 출력되도록
        addLogMessage(who, what, value) {
            // 새로 추가되는 메세지는 배열의 맨 앞에 올 수 있도록 unshift
            // push는 맨 뒤에 추가함
            // message를 객체로 전달
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value,
            });
        },
    },
});

app.mount('#game');

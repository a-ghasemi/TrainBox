const attackEffectBoundary = {
    toPlayer: {
        min: 8,
        max: 15,
    },
    toMonster: {
        min: 5,
        max: 12,
    },
    specialForce: 5
}

function calculateRandomAttackEffect(subject) {
    key = subject === "monster" ?
        attackEffectBoundary.toMonster
        : attackEffectBoundary.toPlayer;

    return Math.random() * (key.max - key.min) + key.min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            round: 0,
            winner: null,
            logs: []
        };
    },
    watch: {
        playerHealth(newValue) {
            if (newValue > 100) this.playerHealth = 100;
            if (newValue <= 0) {
                this.playerHealth = 0;
                this.checkWinner();
            }
        },
        monsterHealth(newValue) {
            if (newValue > 100) this.monsterHealth = 100;
            if (newValue <= 0) {
                this.monsterHealth = 0;
                this.checkWinner();
            }
        }
    },
    computed: {
        mosnterBarStyles() {
            return {width: this.monsterHealth + '%'};
        },
        playerBarStyles() {
            return {width: this.playerHealth + '%'};
        },
        specialAttackAvailable() {
            return this.round >= 3;
        }
    },
    methods: {
        attackMonster() {
            this.round++;
            attackEffect = calculateRandomAttackEffect("monster");
            this.monsterHealth -= attackEffect;
            this.addLog('monster', 'attack', attackEffect);
            this.attackPlayer();
        },
        attackPlayer() {
            attackEffect = calculateRandomAttackEffect("player");
            this.playerHealth -= attackEffect;
            this.addLog('player', 'attack', attackEffect);
        },
        specialAttackMonster() {
            this.round++;
            attackEffect = calculateRandomAttackEffect("monster");
            attackEffect + attackEffectBoundary.specialForce;
            this.monsterHealth -= attackEffect;
            this.addLog('monster', 'special-attack', attackEffect);
            this.attackPlayer();
            this.round = 0;
        },
        healPlayer() {
            this.round++;
            this.playerHealth += 5;
            this.addLog('player', 'healed', 5);
        },
        checkWinner() {
            if (this.playerHealth === 0) {
                if (this.monsterHealth === 0) {
                    this.winner = "tie";
                    this.addLog('game', 'ended');
                } else {
                    this.winner = "monster";
                    this.addLog('game', 'ended');
                }
            } else if (this.monsterHealth === 0) {
                this.winner = "player";
                this.addLog('game', 'ended');
            }
        },
        restartGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
            this.round = 0;
            this.logs = [];
        },
        surrender() {
            this.playerHealth = 0;
            this.addLog('player', 'surrender');
        },
        addLog(who, what, value) {
            message = {
                actionBy: who,
                actionType: what,
                actionValue: value,
            };
            this.logs.unshift(message);
        }
    }
});

app.mount("#game");
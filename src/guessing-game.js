class GuessingGame {
    constructor() {
        this.minimum = null;
        this.maximum = null;
        this.solution = null;
    }

    setRange(min, max) {
        this.minimum = min;
        this.maximum = max;
    }

    guess() {
        this.solution = this.minimum + Math.round((this.maximum - this.minimum) / 2);
        return this.solution;
    }

    lower() {
        this.maximum = this.solution;
    }

    greater() {
        this.minimum = this.solution;
    }
}

module.exports = GuessingGame;

class WalletModel {
    constructor() {
        /**
         * default money
         * @type {number}
         */
        this.nTotalMoney = 10000;
    }

    get() {
        return this.nTotalMoney;
    }

    increaseMoney(nMoney) {
        this.nTotalMoney = this.nTotalMoney + nMoney;

        $(this).trigger('updateView');
    }

    decreaseMoney(nMoney) {
        this.nTotalMoney = this.nTotalMoney - nMoney;

        $(this).trigger('updateView');
    }
}

export default WalletModel;
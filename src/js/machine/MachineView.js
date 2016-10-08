/**
 * Coin Detector
 */
import Droppable from '../component/Droppable';

import BeverageView from '../beverage/BeverageView';
import WalletView from '../wallet/WalletView';
import DisplayView from '../console/DisplayView';

import {coinMap, moneyDetector} from '../configure/Config';

class Machine {
    constructor() {
        this._nInsertedMoney = 0;

        this.oDisplay = new DisplayView();
        this.oWallet = new WalletView();
        this.oBeverage = new BeverageView();

        this._cachedElements();
        this._setEvents();
    }

    _cachedElements() {
        this.$insertArea = $('#_insert_area');
        this.$btnReturn = $('#_btn_money_return');
    }

    _setEvents() {
        /**
         * Droppable Component
         * @type {Droppable}
         */
        this.oMoneyDetector = new Droppable('._drag_able', '._drop_able');

        $(this.oMoneyDetector).on('dropped', $.proxy(this.insertMoney, this));

        /**
         * Return button
         */
        this.$btnReturn.on('click', $.proxy(this.returnMoney, this));

        $(this.oBeverage).on('getMachineMoney', $.proxy(this.getMachineMoney, this));
        $(this.oBeverage).on('setMachineMoney', $.proxy(this.setMachineMoney, this));
    }

    getMachineMoney() {
        return this._nInsertedMoney;
    }

    setMachineMoney(nMachineMoney) {
        if (arguments[1] != null) {
            this._nInsertedMoney = arguments[1];
        } else {
            this._nInsertedMoney = nMachineMoney;
        }

        this.updateView();
    }

    insertMoney(oDroppable, elDrag, elDrop) {
        let sDragMoneyClassName = "." + elDrag.attr('class').split(' ')[0];
        let sDropAreaClassName = '.' + elDrop.attr('class').split(' ')[0];
        let sMoneyType;

        if (coinMap.get(sDragMoneyClassName) > 500) {
            sMoneyType = 'paper';
        } else {
            sMoneyType = 'coin';
        }

        if (moneyDetector.get(sDropAreaClassName) == sMoneyType) {
            this._nInsertedMoney += coinMap.get(sDragMoneyClassName);
        }

        this.updateView();
    }

    returnMoney() {
        this.oWallet.returnMoney(this._nInsertedMoney);
        this.oDisplay.showConsole(this._nInsertedMoney + "KRW has returned !");
        this._nInsertedMoney = 0;

        this.updateView();
    }

    updateView() {
        this.$insertArea.find('.insert>span').text(this._nInsertedMoney);
    }
}

export default Machine;
import Draggable from '../component/Draggable';

import {coinMap} from '../configure/Config';
import WalletModel from './WalletModel'


class WalletView {
    constructor() {
        this.oModel = new WalletModel();

        this._cachedElements();
        this._setEvents();

        this.updateView();
    }

    _cachedElements() {
        this.$wallet = $('#_wallet');
        this.$walletConsole = this.$wallet.find('.my_money>span');
    }

    _setEvents() {
        this.oDraggable = new Draggable('._drag_able');
        $(this.oDraggable).on('dragStart', $.proxy(this.pickMoney, this));

        $(this.oModel).on('updateView', $.proxy(this.updateView, this));
    }

    updateView() {
        this.$walletConsole.text(this.oModel.get());
    }

    pickMoney(oModel, elCloneDrag) {
        let welCloneDrag = $(elCloneDrag);

        let sMoneyClassName = "." + welCloneDrag.attr('class').split(' ')[0];
        let nMoneyValue = coinMap.get(sMoneyClassName);

        if (this.oModel.get() >= nMoneyValue) {
            this.oModel.decreaseMoney(nMoneyValue);
        } else {
            welCloneDrag.remove();
        }
    }

    returnMoney(nMoney) {
        this.oModel.increaseMoney(nMoney);
    }
}

export default WalletView;
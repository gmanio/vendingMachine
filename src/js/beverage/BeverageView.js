import BeverageModel from './BeverageModel';

class BeverageView {
    constructor() {
        this._cachedElements();

        this._suffled();

        this.oModel = new BeverageModel();

        this._setEvents();

        this.updateView();
    }

    _cachedElements() {
        this.$body = $('body');
        this.$productArea = $('#_product_area');
        this.$beverageList = this.$productArea.find('ul');
    }

    _setEvents() {
        this.$productArea.on('mousedown', 'button', $.proxy(this._selectItem, this));
        $(this.oModel).on('updateView', $.proxy(this.updateView, this));
    }

    _selectItem(e) {
        let nMachineMoney = $(this).triggerHandler('getMachineMoney');

        let $selectedItem = $(e.currentTarget).parent();
        let nSlotIndex = this.$beverageList.children().index($selectedItem);

        if (this.oModel.isItemAvailable(nMachineMoney, nSlotIndex)) {
            this.oModel.selectedItem(nSlotIndex);

            this.$body.triggerHandler('showConsole', this.oModel.slots[nSlotIndex].name + " has been purchased");
            $(this).triggerHandler('setMachineMoney', nMachineMoney - this.oModel.slots[nSlotIndex].price)
        } else {
            $(this).trigger('showConsole', 'need more money!');
        }

    }

    _suffled() {
        let parent = this.$productArea.find('ul');
        let child = parent.children();

        child.shuffle();
    }

    updateView() {
        $.each(this.oModel.slots, (idx, item) => {
            if (item.count == 0) {
                let soldEl = $("<div class='soldout_msg'>sold out</div>");

                let soldItem = $(this.$beverageList.children()[idx]);

                soldItem.find('button').attr('disabled', 'disabled');
                soldItem.append(soldEl);
            }
        })
    }
}

export default BeverageView;
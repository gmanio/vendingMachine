class BeverageModel {
    constructor() {
        this.$Beverages = $('#_product_area').find('ul').children();

        this.slots = [];

        this._setSlots();
    }

    _setSlots() {
        $.each(this.$Beverages, (index, el)=> {

            this.slots[index] = {
                name: $(el).find("span").first().text(),
                price: parseInt($(el).children('span').text()),
                count: Math.round(Math.random() * 4) + 1
            };
        });
    }

    selectedItem(slotNumber) {
        this.slots[slotNumber].count = this.slots[slotNumber].count - 1;

        $(this).triggerHandler('updateView');
    }

    isItemAvailable(nMachineMoney, nSlotIdx) {
        if (nMachineMoney >= this.slots[nSlotIdx].price) {
            return true;
        }

        return false;
    }
}

export default BeverageModel;
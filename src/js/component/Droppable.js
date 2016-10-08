class Droppable {
    constructor(sDragElClassName, sDropElClassName) {
        this.sDragElClassName = sDragElClassName;
        this.sDropElClassName = sDropElClassName;

        this._cachedElements();

        this.activate();
    }

    _cachedElements() {
        this.$droppable = $(this.sDropElClassName);
    }

    activate() {
        this.$body = $('body');
        this.$body.on('mouseup', this.sDragElClassName, $.proxy(this._isDropped, this));
    }

    _isDropped(e) {
        let $elDrag = $(e.currentTarget);

        this.$droppable.each((idx, el)=> {
            let $elDrop = $(el);

            var nLeftDropArea = $elDrop.offset().left;
            var nTopDropArea = $elDrop.offset().top;
            var nRightDropArea = nLeftDropArea + parseInt($elDrop.css("width"), 10);
            var nBottomDropArea = nTopDropArea + parseInt($elDrop.css("height"), 10);

            if (e.pageX >= nLeftDropArea && e.pageY >= nTopDropArea && e.pageX <= nRightDropArea && e.pageY <= nBottomDropArea) {
                $(this).trigger('dropped', [$elDrag, $elDrop]);
            }
        });
    }

    deactivate() {
        // this.$document.off('mouseup', this.sDropElClassName, $.proxy(this._isConflict, this));
    }
}

export default Droppable;
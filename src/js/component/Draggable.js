class Draggable {
    constructor(sClassName) {
        this.sDeligateDragClassName = sClassName;

        this.activate();

    }

    activate() {
        this.$document = $('body');

        this.$document.on('mousedown', this.sDeligateDragClassName, $.proxy(this.onDragStart, this));
        this.$document.on('mousemove', this.sDeligateDragClassName, $.proxy(this.onDragging, this));
        this.$document.on('mouseup', this.sDeligateDragClassName, $.proxy(this.onDragEnd, this));
    }

    onDragStart(e) {
        this._bIsDrag = true;

        this.$draggable = $(e.currentTarget);

        this.$copiedDraggableArea = this.$draggable.clone();
        this.$copiedDraggableArea.css({'position': 'absolute', 'z-index': 2147483647});


        $(this).triggerHandler('dragStart', this.$copiedDraggableArea);


        this.onDragging(e);
    }

    onDragging(e) {
        if (this._bIsDrag) {
            this.$draggable.after(this.$copiedDraggableArea);

            let nTopPosition = e.pageY - (parseInt(this.$copiedDraggableArea.css("height"), 10) / 2);
            let nLeftPosition = e.pageX - (parseInt(this.$copiedDraggableArea.css("width"), 10) / 2);

            this.$copiedDraggableArea.offset({top: nTopPosition, left: nLeftPosition});
        }
    }

    onDragEnd(e) {
        if (this._bIsDrag) {
            this._bIsDrag = false;
            this.$copiedDraggableArea.remove();
        }

        $(this).triggerHandler('dragEnd', e);
    }

    deactivate() {
        this.$document.off('mousedown', this.sDeligateDragClassName, $.proxy(this.onDragStart, this));
        this.$document.off('mousemove', $.proxy(this.onDragging, this));
        this.$document.off('mouseup', $.proxy(this.onDragEnd, this));
    }
}

export default Draggable;
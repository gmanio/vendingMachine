class Draggable {
    constructor(sClassName) {
        this.sDeligateDragClassName = sClassName;

        this.activate();
    }

    activate() {
        this.$body = $('body');

        this.$body.on('mousedown', this.sDeligateDragClassName, $.proxy(this.onDragStart, this));
        this.$body.on('mousemove', this.sDeligateDragClassName, $.proxy(this.onDragging, this));
        this.$body.on('mouseup', this.sDeligateDragClassName, $.proxy(this.onDragEnd, this));
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
        this.$body.off('mousedown', this.sDeligateDragClassName, $.proxy(this.onDragStart, this));
        this.$body.off('mousemove', $.proxy(this.onDragging, this));
        this.$body.off('mouseup', $.proxy(this.onDragEnd, this));
    }
}

export default Draggable;
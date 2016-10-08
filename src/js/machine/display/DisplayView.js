class DisplayView {
    constructor() {
        this._cachedElements();
        this._setEvents();
    }

    _cachedElements() {
        this.$body = $('body');
        this.$console = $('#_console_area');
    }

    _setEvents() {
        this.$body.on('showConsole', $.proxy(this.showConsole, this));
    }

    showConsole(sMsg) {
        if (arguments.length >= 2) {
            sMsg = arguments[1];
        }

        let $elDiv = $('<div class="msg">');

        if ($.type(sMsg) != 'string') {
            return false;
        }

        this.$console.append($elDiv.text(sMsg));

        this.$console.scrollTop(this.$console.prop('scrollHeight'));

        return true;
    }
}

export default DisplayView;
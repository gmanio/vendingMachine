export default class Money {
    // var type = [50, 100, 500, 1000];
    constructor() {
        this.setEvents();
    }

    setEvents() {
        $(document).on('click', '._drag_able', this.getCoin)
    }

    getCoin() {
        console.log('dfds');
    }
}

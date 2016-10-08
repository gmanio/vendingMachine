import Util from "./helper/Util";
import Machine from "./machine/MachineView.js";

class App {
    constructor() {
        this.oMachine = new Machine();
    }
}

window.oApp = new App();

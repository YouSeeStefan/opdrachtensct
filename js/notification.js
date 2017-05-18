class Notification {

    /**
     * Constructor method om notification bars aan te kunnen maken.
     * @param containerClass (String): ID of Class van het html element
     * @param showTime (int): hoelang blijft een notification bar open in ms
     * @constructor
     */
    constructor(containerClass, showTime = 3000) {
        this.container = document.querySelector(containerClass);
        this.showTime = showTime;
    }

    /**
     * Trigger de notification bar om een bericht te laten zien
     * @param message (String): de tekst die moet worden weergegeven
     */
    showMessage(message) {
        if ( this.timeoutID ){
            clearTimeout(this.timeoutID);
        }

        this.show();
        this.container.innerHTML = message;
        this.timeoutID = setTimeout(() => this.hide(), this.showTime);
    }

    /**
     * Functie om de bar in beeld te laten komen
     */
    show() {
        this.container.classList.add("enabled");
    }

    /**
     * Functie om de balk weer weg te laten gaan
     */
    hide() {
        this.container.classList.remove("enabled");
    }

}

export default Notification;
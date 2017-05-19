import Notification from 'notification';

class AlertNotification extends Notification {

    constructor(containerClass, showTime = 3000) {
        super(containerClass, showTime);
    }

    showMessage(message){
        alert(message);
        super.showMessage(message);
    }

}

export default AlertNotification;
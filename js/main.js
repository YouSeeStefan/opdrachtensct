import Notification from './notification';

const notificationBar = new Notification(".notification-bar");
let countClick = 0;

notificationBar.showMessage("Welkom op deze pagina");

document.addEventListener("click",
                          () => {
                              countClick++;
                              notificationBar.showMessage(`je hebt ${countClick}x geklikt`);
                          });


const notificationBar2 = new Notification(".notification-bar2");
let countClick2 = 0;
notificationBar2.showMessage("Welkom in de hell :)");

document.addEventListener("click",
                          () => {
                              countClick2++;
                              notificationBar2.showMessage(`je hebt ${countClick2}x geklikt`);
                          });
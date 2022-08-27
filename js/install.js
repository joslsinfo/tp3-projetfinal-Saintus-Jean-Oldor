let deferredInstallPrompt = null;
const installButton = document.getElementById('btnInstall');
installButton.addEventListener('click', installPWA);


/**Chrome déclenche un événement nommé "beforeisntallprompt" quand il detecte que votre PWA est installable.
 * On va mettre un listener sur cet événement et afficher notre bouton s'il y a lieu
 */
window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);


function saveBeforeInstallPromptEvent(evt) {
    //CODELAB: Add code to save event & show the install button
    deferredInstallPrompt = evt;
    installButton.removeAttribute('hidden');
}    

/**Maintenant, on va coder le comportement de notre bouton (le popup de confirmation chrome d'installation).
 * Cacher le bouton d'installation une fois fini l'installation.
*/
function installPWA(evt) {
    // Add code show install prompt & hide the install button.
    deferredInstallPrompt.prompt();
    // Hide the install button, it can't be called twice.
    evt.srcElement.setAttribute('hidden', true);


    /**A des fins de débogage, on ajoute ces lignes de code  */
    // Log user response to prompt.
    deferredInstallPrompt.userChoice
    .then((choice) => {
    if (choice.outcome === 'accepted') {
    // console.log('User accepted the A2HS prompt', choice);
    console.log("L'usager a installé la PWA via mon bouton", choice);
    } else {
    // console.log('User dismissed the A2HS prompt', choice);
    console.log("L'usager a refusé d'installer la PWA", choice);
    }
    deferredInstallPrompt = null;
    });
}
   
window.addEventListener('appinstalled', logAppInstalled);

/** */
   function logAppInstalled(evt) {
    // CODELAB: Add code to log the event
    console.log("L'usager a installé la PWA via les ... de chrome ", evt);
   }
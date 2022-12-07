let platform = 'twitch';
let useController = false;
$(window).on('load', function() {
    $("#loader-wrapper").fadeOut(700);
});
function changePlatform(newPlatform) {
    platform = newPlatform
    const login = document.querySelector(".login-twitch");
    if(platform == 'twitch') {
        login.href = "https://twitch.tv";
        login.classList.remove("disabled");
    } else {
        login.removeAttribute("href");
        login.classList.add("disabled");
    }
}
function setUseController() {
    useController = !useController;
    const button = document.querySelector(".controller-button");
    if(useController) {
        button.textContent = "Disable Controller" 
    } else {
        button.textContent = "Enable Controller" 
    }
}
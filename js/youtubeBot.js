function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}


$(document).ready(function() {
    $('.youtube-stream').ready(function() {
        // these are required, no exclusions
        // the textbox in which u type stuff
        const textbox = getElementByXpath("//div[@id='input']");

        // the little paper plane button u click to send what u wrote in the textbox
        const sendButton = getElementByXpath("//button[@aria-label='Send']");

        window.addEventListener("keydown", function(event) {
            const key = event.key.toLowerCase();
            if (!event.repeat) {
                let command = "";
                if (key == "w") command = "up";
                else if (key == "a") command = "left";
                else if (key == "s") command = "down";
                else if (key == "d") command = "right";
                else if (key == "1") command = "start";
                else if (key == "2") command = "select";
                else if (key == "j") command = "A";
                else if (key == "k") command = "B";
                if (command != "") {
                    textbox.focus();
                    document.execCommand("insertHTML", false, command);
                    sendButton.click();
                    command = "";
                    textbox.textContent = "";
                    setTimeout(function() {
                        textbox.textContent = "";
                    });
                }
            }
        });
    });
});
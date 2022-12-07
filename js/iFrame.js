function changeIFrame() {
    const stream = document.querySelector(".youtube-stream");
    const chat = document.querySelector(".youtube-chat");
    const url = document.querySelector(".livestream-url").value;

    stream.src = url.replace("watch?v=", "embed/");
    chat.src = url.replace("watch", "live_chat").concat("&embed_domain=lumioze.github.io");
}

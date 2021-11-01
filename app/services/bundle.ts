import "bootstrap-honoka"
import "bootstrap-honoka/dist/css/bootstrap.min.css"
import "animate.css"
import "./style.scss"
import { Howl } from "howler"

(function () {
    const snd = new Howl({
        src: [
            "assets/tangkeke.mp3"
        ]
    });

    document.getElementById("keke-btn").addEventListener("click", e => snd.play())

})();
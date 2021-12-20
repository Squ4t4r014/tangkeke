import "bootstrap-honoka"
import "bootstrap-honoka/dist/css/bootstrap.min.css"
import "animate.css"
import "./style.scss"
import { Howl } from "howler"

(function () {
    const keke = new Howl({src: ["assets/tangkeke.mp3"]});
    const negative1 = new Howl({src: ["assets/negative1.mp3"]});
    const negative2 = new Howl({src: ["assets/study.mp3"]});

    try {
        document.getElementById("keke-btn").addEventListener("click", e => keke.play());
    } catch (e) {
    }

    try {
        document.getElementById("negative-btn-1").addEventListener("click", e => negative1.play());
        document.getElementById("negative-btn-2").addEventListener("click", e => negative2.play());
    } catch (e) {
    }

})();
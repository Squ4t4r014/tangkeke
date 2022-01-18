import "jquery"
import "bootstrap-honoka"
import "bootstrap-honoka/dist/css/bootstrap.min.css"
import "animate.css"
import "./style.scss"
import { Howl } from "howler"

(function () {
    const negative1 = new Howl({ src: [ "assets/negative1.mp3" ]});
    const negative2 = new Howl({ src: [ "assets/study.mp3" ]});

    document.getElementById("negative-btn-1").addEventListener("click", e => negative1.play());
    document.getElementById("negative-btn-2").addEventListener("click", e => negative2.play());

})();

var vplay = {
    // full screen
    init: () => {
        for (let v of document.querySelectorAll(".galerie video")) {
            v.onclick = () => {
                if (!v.classList.contains("full")) {
                    vplay.toggle(v);
                }
            };
        }
    },
    // toggle fullscreen
    toggle: e => {
        // vypnout
        document.getElementById("vClose").classList.toggle("show");
        // to
        let v = e === false ? document.querySelector(".galerie .full") : e;
        v.classList.toggle("full");
        v.controls = e === false ? false : true;
        if (e === false) {
            v.pause();
        }
    }
};
window.onload = vplay.init;
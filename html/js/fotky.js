window.onload = () => {
    for (let i of document.querySelectorAll(".galerie img")) {
        i.onclick = () => i.classList.toggle("full");
    }
};
const allHearts = document.querySelectorAll(".icon-heart");

for (const heart of allHearts) {
    heart.addEventListener("click", () => {
        if (heart.classList.contains("heartClicked")) {
            heart.classList.remove("heartClicked");
        } else {
            heart.classList.add("heartClicked");
        }
    });
}

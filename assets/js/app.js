const allHearts = document.querySelectorAll(".icon-heart");

for (const heart of allHearts) {
    heart.addEventListener("mouseover", () => {
        heart.setAttribute("src", "./assets/docs/images/icon-heart.png");
    });

    heart.addEventListener("mouseout", () => {
        heart.setAttribute("src", "./assets/docs/images/icon-heart.svg");
    });
}

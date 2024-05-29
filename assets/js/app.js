const allHearts = document.querySelectorAll(".icon-heart");
const allTitles = document.querySelectorAll(".title");
const inputSearchElement = document.getElementById("input-search");

for (const heart of allHearts) {
    heart.addEventListener("click", () => {
        if (heart.classList.contains("heartClicked")) {
            heart.classList.remove("heartClicked");
        } else {
            heart.classList.add("heartClicked");
        }
    });
}

inputSearchElement.addEventListener("input", () => {
    const inputSearch = inputSearchElement.value.toLowerCase();

    const titlesArray = Array.from(allTitles);

    const filteredTitles = titlesArray.filter((title) =>
        title.textContent.toLowerCase().includes(inputSearch)
    );

    for (const title of titlesArray) {
        const card = title.parentElement;
        card.style.display = "none";
    }

    for (const title of filteredTitles) {
        const card = title.parentElement;
        card.style.display = "grid";
    }
});

let sr = ScrollReveal({
    duration: 2500,
    distance: "60px",
});

sr.reveal(".header-container", { origin: "top", delay: 500 });
sr.reveal(".card-1", { origin: "left", delay: 600 });
sr.reveal(".card-2", { origin: "right", delay: 700 });
sr.reveal(".card-3", { origin: "bottom", delay: 800 });

// Chamando a tag body do HTML
const body = document.querySelector("body");
// Chamando as tags utilizadas dentro da tag body
const allHearts = body.querySelectorAll(".icon-heart");
const allTitles = body.querySelectorAll(".title");
const inputSearchElement = body.getElementById("input-search");

// Função para deixar o coração colorido ao clicar
for (const heart of allHearts) {
    heart.addEventListener("click", () => {
        if (heart.classList.contains("heartClicked")) {
            heart.classList.remove("heartClicked");
        } else {
            heart.classList.add("heartClicked");
        }
    });
}

// Função para filtrar os cards que correspondem ao texto do input
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

// Configuração da biblioteca ScrollReveal
let sr = ScrollReveal({
    duration: 2500,
    distance: "60px",
});

sr.reveal(".header-container", { origin: "top", delay: 500 });
sr.reveal(".card-1", { origin: "left", delay: 600 });
sr.reveal(".card-2", { origin: "right", delay: 700 });
sr.reveal(".card-3", { origin: "left", delay: 800 });

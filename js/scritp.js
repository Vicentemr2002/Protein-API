
function openNav(){
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%";
}

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("buscador");
    const proteinCards = document.querySelectorAll(".index-protein");
    const noResultsMessage = document.getElementById("noResultsMessage");


    function normalizeText(text) {
        return text
            .toLowerCase()
            .replace(/[\s,:.]+/g, " ") 
            .trim();
    }

    searchInput.addEventListener("input", function () {
        const searchValue = normalizeText(searchInput.value);
        let matches = 0;

        proteinCards.forEach(card => {
            const cardText = normalizeText(card.textContent);

            if (cardText.includes(searchValue)) {
                card.style.display = "block"; 
                matches++;
            } else {
                card.style.display = "none"; 
            }
        });

    
        noResultsMessage.style.display = matches > 0 ? "none" : "block";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const proteins = document.querySelectorAll(".index-protein");

    proteins.forEach((protein, index) => {
        protein.style.animationDelay = `${index * 0.2}s`;
    });
});
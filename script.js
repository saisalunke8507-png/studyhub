const searchBox = document.getElementById("search");

const cards = document.querySelectorAll(".card");

const noResults = document.getElementById("noResults");

searchBox.addEventListener("input", function () {

    const searchText = searchBox.value.toLowerCase().trim();

    let visibleCount = 0;

    cards.forEach(function (card) {

        const content = card.textContent.toLowerCase();

        if (content.includes(searchText)) {

            card.style.display = "block";
            visibleCount++;

        } else {

            card.style.display = "none";

        }

    });

    noResults.hidden = visibleCount !== 0;

});
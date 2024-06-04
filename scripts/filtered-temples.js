const temples = [
    {
        templeName: "Apia Samoa",
        location: "Apia, Samoa",
        dedicated: "1983, August, 5",
        area: 18761,
        imageUrl: "https://churchofjesuschrist.org/imgs/6007b20e832459d2d8540c15a8f5fa80d7dcff0f/full/320%2C/0/default"
    },
    {
        templeName: "Bangkok Thailand",
        location: "Bangkok, Thailand",
        dedicated: "2022, January, 23",
        area: 43386,
        imageUrl: "https://churchofjesuschrist.org/imgs/4052d9f8ff0e11edb9dbeeeeac1e97aea1b93079/full/320%2C/0/default"
    },
    {
        templeName: "Lima Peru",
        location: "Lima, Peru",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Paris France",
        location: "Paris, France",
        dedicated: "2017, May, 21",
        area: 44000,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/5ec026c4efeaaa19a98e40f0f1b4c6069ae63517/full/320%2C/0/default"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 128337,
        imageUrl: "https://churchofjesuschrist.org/imgs/df6b96801c9f11ec99eeeeeeac1ea2207e7c517b/full/250%2C/0/default"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    }
];

function displayTemples(filteredTemples) {
    const templeContainer = document.getElementById("temple-grid");
    templeContainer.innerHTML = ""; // Clear the container
    filteredTemples.forEach(temple => {
        const templeCard = document.createElement("div");
        templeCard.className = "temple-card";
        templeCard.innerHTML = `
            <figure>
                <figcaption>
                    <h3>${temple.templeName}</h3>
                    <p><strong>Location:</strong> ${temple.location}</p>
                    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                    <p><strong>Area:</strong> ${temple.area} square feet</p>
                </figcaption>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            </figure>
        `;
        templeContainer.appendChild(templeCard);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const navMenu = document.getElementById("navmenu");
    const filterButtons = document.querySelectorAll('.filter-btn');

    displayTemples(temples); // Display all temples by default

    filterButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const filter = button.getAttribute('data-filter');
            let filteredTemples;

            if (filter === 'all') {
                filteredTemples = temples;
            } else if (filter === 'large') {
                filteredTemples = temples.filter(temple => temple.area > 90000);
            } else if (filter === 'small') {
                filteredTemples = temples.filter(temple => temple.area < 10000);
            } else if (filter === 'old') {
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
            } else if (filter === 'new') {
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
            }

            displayTemples(filteredTemples);
        });
    });

    menuBtn.addEventListener("click", () => {
        if (navMenu.style.display === "flex" || navMenu.style.display === "block") {
            navMenu.style.display = "none";
        } else {
            navMenu.style.display = "flex";
            navMenu.style.flexDirection = "column";
        }
    });
});

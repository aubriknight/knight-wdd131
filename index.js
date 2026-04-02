const projects = [
    {
        name: "Meta Tags and CSS Selectors",
        week: "1",
        imgSrc: "meta.png",
        imgAlt: "Meta tags image",
        description: "",
        link: "https://aubriknight.github.io/knight-wdd131/week1/week1.html"
    },
    {
        name: "Mission Statement",
        week: "1",
        imgSrc: "mission.png",
        imgAlt: "Mission Statement image",
        description: "In this project I learned how to create a light and dark mode for the website.",
        link: "https://aubriknight.github.io/knight-wdd131/week1/mission/mission.html"
    },
        {
        name: "DOM",
        week: "2",
        imgSrc: "dom.png",
        imgAlt: "DOM image",
        description: "In this project I learned how to use selecters in JavaScript to highlight certain parts of the website page.",
        link: "https://aubriknight.github.io/knight-wdd131/week2/dom.html"
    },
        {
        name: "Computational Thinking",
        week: "2",
        imgSrc: "computational.png",
        imgAlt: "Computational thinking image",
        description: "In this project I learned how to use selectors to dynamically add different backgrounds to the website.",
        link: "https://aubriknight.github.io/knight-wdd131/week2/theme.html"
    },
        {
        name: "Responsive CSS",
        week: "3",
        imgSrc: "responsive-design.png",
        imgAlt: "Responsive CSS image",
        description: "In this project I learned how to create a responsive menu button that toggles the menu open and closed.",
        link: "https://aubriknight.github.io/knight-wdd131/week3/responsive.html"
    },
        {
        name: "Cool Pics",
        week: "3",
        imgSrc: "cool.png",
        imgAlt: "Cool pics image",
        description: "In this project I learned how to create a modal for images on a website.",
        link: "https://aubriknight.github.io/knight-wdd131/week3/coolpics.html"
    },
        {
        name: "Responsive Gallery",
        week: "4",
        imgSrc: "responsive.png",
        imgAlt: "Responsive gallery image",
        description: "In this project I furthered my learning of modals by using different images for each modal.",
        link: "https://aubriknight.github.io/knight-wdd131/week4/responsive_gallery.html"
    },
        {
        name: "Accessibility",
        week: "5",
        imgSrc: "accessibility.png",
        imgAlt: "Accessibility image",
        description: "In this project I learned more about accessibility and how to implement that into a rating system.",
        link: "https://aubriknight.github.io/knight-wdd131/week5/accessibility.html"
    },
        {
        name: "Blog",
        week: "5",
        imgSrc: "blog.png",
        imgAlt: "Blog image",
        description: "In this project I used aria labels for a rating system and used an object to implement the information to the page.",
        link: "https://aubriknight.github.io/knight-wdd131/week5/blog.html"
    },
        {
        name: "Array Methods",
        week: "6",
        imgSrc: "array.png",
        imgAlt: "Array methods image",
        description: "In this project I practiced using different array methods such as: forEach, map, filter, and reduce.",
        link: "https://aubriknight.github.io/knight-wdd131/week6/array-methods.html"
    },
        {
        name: "Movies",
        week: "6",
        imgSrc: "movies.png",
        imgAlt: "Movies image",
        description: "For this project I used an object and the map array method to apply the information to the page.",
        link: "https://aubriknight.github.io/knight-wdd131/week6/movies.html"
    },
        {
        name: "Credit Card Form",
        week: "7",
        imgSrc: "credit.png",
        imgAlt: "Credit card form image",
        description: "In this project I learned about regular expressions and dynamically producing information to the page when submitting forms.",
        link: "https://aubriknight.github.io/knight-wdd131/week7/creditcard.html"
    },
        {
        name: "Objects",
        week: "8",
        imgSrc: "objects.png",
        imgAlt: "Objects image",
        description: "In this project I learned more about forms and adding error messages through JavaScript.",
        link: "https://aubriknight.github.io/knight-wdd131/week8/objects.html"
    },
        {
        name: "Character Card",
        week: "8",
        imgSrc: "character.png",
        imgAlt: "Character card image",
        description: "In this project I learned about functions inside of objects, aka methods, and how to use them in a button on the page.",
        link: "https://aubriknight.github.io/knight-wdd131/week8/character.html"
    },
        {
        name: "Flexbox",
        week: "9",
        imgSrc: "flexbox.png",
        imgAlt: "Flexbox image",
        description: "In this project I reviewed how to use flexbox in CSS.",
        link: "https://aubriknight.github.io/knight-wdd131/week9/flexbox.html"
    },
        {
        name: "Recipe Book",
        week: "9",
        imgSrc: "recipe.png",
        imgAlt: "Recipe book image",
        description: "In this project I combined a lot of skills that I learned in the class and learned how to create a search look up.",
        link: "https://aubriknight.github.io/knight-wdd131/week9/flexbox.html"
    },
        {
        name: "Hiking",
        week: "10",
        imgSrc: "hiking.png",
        imgAlt: "Hiking image",
        description: "In this project I used a search combined with a sort function to show relevent information on the page.",
        link: "https://aubriknight.github.io/knight-wdd131/week10/hiking.html"
    }
]

// Add recipe js for project template and search

const projectContainer = document.querySelector('#project-container');
const searchInput = document.querySelector('#search');
const searchButton = document.querySelector('.search-button');

function search() {
    const query = searchInput.value.toLowerCase().trim();

    const filtered = projects.filter(project =>
        project.name.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query)
    );

    renderAll(filtered);
}

searchButton.addEventListener('click', search);

searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") search();
});

// function tagTemplate(tags) {
//     return tags.map(tag => `<button>${tag}</button>`).join(' ');
// }

// function difficultyTemplate(rating) {
//     let html = "";
//     for (let i = 1; i <= 5; i++) {
//         html += i <= rating ? "⭐" : "☆";
//     }
//     return html;
// }

function projectTemplate(project) {
    return `
    <div class="project-card">
        <img class="project-image" src="${project.imgSrc}" alt="${project.imgAlt}">
        <div class="project-info">
            <h3>${project.name}</h3>
            <button class="project-btn" data-link="${project.link}">View Project</button>
            <p class="description">${project.description}</p>
        </div>
    </div>`;
}

function renderProject(project) {
    projectContainer.innerHTML += projectTemplate(project);
}

function addButtonListeners() {
    const buttons = document.querySelectorAll(".project-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const link = btn.dataset.link;
            window.location.href = link;
        });
    });
}


function renderAll(list) {
    projectContainer.innerHTML = "";
    list.forEach(renderProject);
}

function renderAll(list) {
    projectContainer.innerHTML = "";
    list.forEach(renderProject);
    addButtonListeners();
}


function init() {
    renderAll(projects);
}

init();


const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function() {
    menu.classList.toggle('show');
    console.log("Button clicked!");
    menuBtn.classList.toggle('change');
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 700) {
        menu.classList.remove('show')
        menuBtn.classList.remove('change');
      }    
});

const projectButton = document.querySelector(".project-btn")

projectButton.addEventListener('click', function() {
    
})
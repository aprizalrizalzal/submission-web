const links = document.querySelectorAll('nav a');
const articles = document.querySelectorAll('article');
const asideItems = document.querySelectorAll('aside div');

let lastScrollY = window.scrollY; 

window.addEventListener('scroll', () => { 
    const navbar = document.getElementById('navbar'); 
    if (window.scrollY > lastScrollY) {
        navbar.classList.add('hidden'); 
    } else {
        navbar.classList.remove('hidden'); 
    } lastScrollY = window.scrollY; 
});

function setActiveLink(link) {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
}

function showElements(elements, linkId) {
    elements.forEach(element => {
        element.classList.add('hidden');
        if (element.getAttribute('id') === linkId) {
            element.classList.remove('hidden');
        }
    });
}

links.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        setActiveLink(link);

        const linkId = link.getAttribute('href').substring(1);
        showElements(articles, linkId);
        showElements(asideItems, linkId);
    });
});

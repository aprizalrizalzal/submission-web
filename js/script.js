const links = document.querySelectorAll('nav a');
const articles = document.querySelectorAll('article');
const asideItems = document.querySelectorAll('aside div');

let lastScrollY = window.scrollY; 

window.addEventListener('scroll', () => { 
    const navbar = document.getElementById('navbar'); 
    navbar.classList.toggle('hidden', window.scrollY > lastScrollY); 
    lastScrollY = window.scrollY; 
});

function setActiveLink(link) {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
}

function showElements(elements, linkId) {
    elements.forEach(element => {
        element.classList.toggle('hidden', element.getAttribute('id') !== linkId);
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

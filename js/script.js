const links = document.querySelectorAll('nav a');
const articles = document.querySelectorAll('article');
const asideItems = document.querySelectorAll('aside div');

function setActiveLink(link) {
    for (let j = 0; j < links.length; j++) {
        links[j].classList.remove('active');
    }
    link.classList.add('active');
}

function showArticleAndAside(linkId) {
    for (let k = 0; k < articles.length; k++) {
        articles[k].classList.add('hidden');
        if (articles[k].getAttribute('id') === linkId) {
            articles[k].classList.remove('hidden');
        }
    }

    for (let l = 0; l < asideItems.length; l++) {
        asideItems[l].classList.add('hidden');
        if (asideItems[l].getAttribute('id') === linkId) {
            asideItems[l].classList.remove('hidden');
        }
    }
}

links.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        setActiveLink(link);

        const linkId = this.getAttribute('href').substring(1);
        showArticleAndAside(linkId);
    });
});
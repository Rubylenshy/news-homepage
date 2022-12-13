
const menu_hamburger = document.querySelector(".hamburger.one");
const close_hamburger = document.querySelector(".hamburger.two");
const overlay = document.querySelector('.overlay')
const hamburger_nav = document.querySelector(".mobile-navigation");

menu_hamburger.addEventListener('click', function(){
    hamburger_nav.classList.add('close');
    overlay.style.display = 'block'
})
close_hamburger.addEventListener('click', function(){
    hamburger_nav.classList.remove('close');
    overlay.style.display = 'none'
})

const divNews = document.querySelector('.news')

news("../news.json");
async function news(file){
    let obj1 = await fetch(file);
    let jsonNews = await obj1.text();

    const news = JSON.parse(jsonNews);
    var newNews = '';
    news.forEach(item => {
        
        let htmlNews = `<div class="new-headline">
                            <h3>${item.heading}</h3>
                            <p>${item.paragraph}</p>
                        </div>`;
        
        newNews += htmlNews;
    });

    divNews.innerHTML = newNews;

}

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
                            <hr>
                        </div>`;
        
        newNews += htmlNews;
    });

    divNews.innerHTML = newNews;

    window.addEventListener('load', ()=>{
        const headline = document.querySelectorAll('.new-headline')
        
        for (let i = 0; i < headline.length; i++) {
            pages[0].addEventListener('click', ()=>{
                pages[0].classList.add('active')
                pages[1].classList.remove('active')
                headline[3].style.display = 'none'
                headline[4].style.display = 'none'
                headline[5].style.display = 'none'
                
                headline[0].style.display = 'block'
                headline[1].style.display = 'block'
                headline[2].style.display = 'block'
                
            })
            pages[1].addEventListener('click', ()=>{
                pages[0].classList.remove('active')
                pages[1].classList.add('active')
                headline[0].style.display = 'none'
                headline[1].style.display = 'none'
                headline[2].style.display = 'none'
                
                headline[3].style.display = 'block'
                headline[4].style.display = 'block'
                headline[5].style.display = 'block'
            })
        }
        
    })
    const pages = document.querySelectorAll('.pages div')

}


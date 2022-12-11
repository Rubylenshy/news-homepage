
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
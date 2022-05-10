console.log('this is  the project 3');

//initialize the news api parameters
source = 'bbc-news';
let apikey = '00ee2d66e4fa482e9ed9cd132667cc65'

//Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

//create a ajax get request
const xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apikey=${apikey}`, true);
// xhr.getResponseHeader('Content-type', 'application/json');

//what to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles
        //console.log(articles);

        let newsHtml = "";
        articles.array.forEach(function (element, index) {

            console.log(element, index);
            let news = `<div class="card">
    <div class="card-header" id="heading${index}">
        <h5 class="mb-0">
            <button class="btn btn-link" data-toggle="collapse" data-target="#collapse${index}"
                aria-expanded="true" aria-controls="collapse${index}">
              Breaking News${index + 1}${element["title"]}
            </button>
        </h5>
    </div>

    <div id="collapse${index}" class="collapse show" aria-labelledby="heading${index}" data-parent="#newsAccordion">
        <div class="card-body"> ${element["description"]} .<a href="${element['url']}">Read more here</a></div>
    </div>
</div>`

            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("some error occured");
    }
}









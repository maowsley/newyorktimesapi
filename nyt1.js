const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1
const key = 'yYu0th1E4x0ZG11X2F3s1scuChq5BgCu'; //2
let url; //3


//SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//Results Section
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//Results section
const section = document.querySelector('section');


let pageNumber = 0;
console.log('PageNumber:', pageNumber);
let displayNav = false;

//Event Listeners
    //1                       //2
searchForm.addEventListener('submit'. fetchResults);
nextBtn.addEventListener('click', nextPage);  //3
previousBtn.addEventListener('click', previousPage);  //3

//fetchResults()
                //1
function fetchResults(e){
    //previous code
    fetch(url).then(function(results){
        return result.json();
    }).then(function(json){
        displayResults(json); //1 * //3
    });

    //2 
    function displayResults(json) {
        While (section.firstChild) {
        section.removeCjild(section.firstChild);  //1
    }
 };
    function nextPage(e) {
        pageNumber++;  //1
        fetchResults(e);   //2
        console.log("page number:", pageNumber);  //3
    };
    function previousPage(e) {
        if(pageNumber > 0) {
            pageNumber--;
        } else{
            return;  //3
        }
        fetchResults(e);  //4
        console.log("Page:", pageNumber); //5
    }
    function displayResults(json){
        console.log("DisplayResults", json);
    };
    function displayResults(json) {
        let articles = json.response.docs;
        
        if(articles.length >= 10 {
            nav.style.display = 'block';  //shows the nav display if 10 items are in the array
        } else {
            nav.style.display = 'none'; //hides the nav display if less than 10 items are in the array
            for(let i = 0; i < articles.length; i++) {
                let article = document.createElement('article');  //1
                let heading = document.createElement('h2');     //2
                let link = document.createElement('a'); //1
                let para = document.createElement('p');
                let clearFix = doccument.createElement('div');  //2
                
               
                //4
                for(let j = 0; j < current.keywords.length; j++) {
                    let span = document.createElement('span');
                    span.textContent += current.keywords[j].value + '';
                    para.appendChild(span);
                }

                if(current.multimedia.length > 0) {
                    //3
                    image.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
                    //4
                    img.alt = current.headline.main;
                }
                

                //8
                clearFix.setAttribute('class', 'clearfix');

                //9
                article.appendChild(heading);  
                heading.appendChild(link); 
                article.appendChild(para);
                article.appendChild(clearfix);
                section.appendChild(article);  
            }
        }
    };
    function fetchResults(e) {
    e.preventDefault();  //1

    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; //3
    console.log("URL:", url);
    //two conditionals 

    if (startDate.value !== '') {
        console.log(startDate.value)
        url += '&begin_date=' + startDate.value;
      };
    
      if (endDate.value !== '') {
        url += '&end_date=' + endDate.value;
      };
    //1
    fetch(url)
    .then(function(result) {
        console.log(result)
        return result.json();  //2
    }).then(function(json) {
        console.log(json); //3
    });
}

function nextPage(){
    console.log("Nest button clicked");
} //5

function previousPage(){
    console.log("Next button clicked");
}  //5
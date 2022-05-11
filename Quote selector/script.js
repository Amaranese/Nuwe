let newQuoteButton = document.getElementById('new-quote');
let text = document.getElementById('text');
let author = document.getElementById('author');
let tweetQuotelink = document.getElementById('tweet-quote');

newQuoteButton.addEventListener('click', (e) => {
    addNewQuote();
})




const QUOTE_URL = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";




async function addNewQuote() {
    const promise = await fetch(QUOTE_URL);
    const json = await promise.json()

    text.innerHTML = json.quotes[0].text;
    author.innerHTML = json.quotes[0].author;
    tweetQuotelink.href = `https://twitter.com/intent/tweet?text=${encodeURI(`"${text.innerHTML}" - ${author.innerHTML}`)}`

}

addNewQuote()



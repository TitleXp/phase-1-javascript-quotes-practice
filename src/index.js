{/* <li class='quote-card'>
<blockquote class="blockquote">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Someone famous</footer>
  <br>
  <button class='btn-success'>Likes: <span>0</span></button>
  <button class='btn-danger'>Delete</button>
</blockquote>
</li> */}

//Function getters
const quotesUl = () => document.getElementById("quote-list")

//Callbacks

const displayQuote = (quoteObj) => {
    const myLi = document.createElement("li")
    myLi.classList.add('quote-card')
    const myBlockQuote = document.createElement("blockquote")
    myBlockQuote.classList.add('blockquote')
    const myPar = document.createElement("p")
    myPar.classList.add('mb-0')
    myPar.innerText = quoteObj.quote
    const myFooter = document.createElement("footer")
    myFooter.classList.add('blockquote-footer')
    myFooter.innerText = quoteObj.author
    const myLineBreaker =document.createElement("br")
    const myLikeBtn = document.createElement("button")
    myLikeBtn.classList.add("btn-success")
    myLikeBtn.innerText = "Likes: "
    const mySpan = document.createElement("span")
    mySpan.innerText = quoteObj.likes.length
    const myDeleteBtn = document.createElement("button")
    myDeleteBtn.classList.add("btn-danger")
    myDeleteBtn.innerText = "Delete"

    quotesUl().appendChild(myLi)
}

const fetchData = () => {
    fetch("http://localhost:3000/quotes?_embed=likes")
    //HTP sychronous request, returns promise
    .then(response => response.json())
    //expects function, return promise
    .then(quotes => quotes.forEach(displayQuote))
    .catch(error => alert(error))

    
}
fetchData()
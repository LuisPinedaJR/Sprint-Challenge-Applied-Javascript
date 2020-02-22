// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector('.cards-container')

axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    const articles1 = Object.values(response.data.articles)
    // console.log(articles1)
    articles1.forEach(item => {
      console.log(item)
      item.forEach(item2 => {
        cardContainer.appendChild(cardComp(item2))
      })
    })
    // ;[response.data.articles].forEach(article => {
    //   console.log(article)
    //   const newCardComp = cardComp(article)
    //   cardContainer.appendChild(newCardComp)
    // })
    //   const newCardComp = cardComp(article)
    //   cardContainer.appendChild(newCardComp)
  })

function cardComp(article) {
  const topDiv = document.createElement('div')
  topDiv.classList.add('card')

  const headlineDiv = document.createElement('div')
  headlineDiv.classList.add('headline')
  headlineDiv.textContent = article.headline
  topDiv.appendChild(headlineDiv)

  const authorDiv = document.createElement('div')
  authorDiv.classList.add('author')
  topDiv.appendChild(authorDiv)

  const imgContainer = document.createElement('div')
  imgContainer.classList.add('img-container')
  authorDiv.appendChild(imgContainer)

  const image = document.createElement('img')
  image.src = article.authorPhoto
  imgContainer.appendChild(image)

  const authorName = document.createElement('span')
  authorName.textContent = article.authorName
  // might need to add class idk yet
  authorDiv.appendChild(authorName)

  return topDiv
}

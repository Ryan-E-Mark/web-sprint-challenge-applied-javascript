import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  // Object destructuring
  const headLine = article.headline;
  const authorImg = article.authorPhoto;
  const name = article.authorName;

  // Instantiating Elements
  const divCard = document.createElement('div');
  const divHeadLine = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const authorsName = document.createElement('span');

  // Giving elements their classes and content
  divCard.classList.add('card');
  divHeadLine.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');
  
  divHeadLine.textContent = headLine;
  img.src = authorImg;
  authorsName.textContent = `By ${name}`;

  // Setting up structure of elements
  divCard.appendChild(divHeadLine);
  divCard.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(img);
  author.appendChild(authorsName);

  divCard.addEventListener('click', event => {
    console.log(headLine);
  })

  return divCard;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get(`http://localhost:5000/api/articles`)
  .then(resp => {

    // const data = resp.data.articles;
    // data.forEach((element) => {
    //   const articleData = element;
    //   articleData.forEach(article => {
    //     const articleMaker = Card(article);
    //   const cardSelector = document.querySelector(`${selector}`);
    //   cardSelector.appendChild(articleMaker);
    //   })
      
    // })
    // I tried to make this more DRY but wasn't quite sure how to 
  
    const articlesBootstrap = resp.data.articles.bootstrap;
    articlesBootstrap.forEach(article => {
      const articleMaker = Card(article);
      const cardSelector = document.querySelector(`${selector}`);
      cardSelector.appendChild(articleMaker);
    })
    const articlesJavaScript = resp.data.articles.javascript;
    articlesJavaScript.forEach(article => {
      const articleMaker = Card(article);
      const cardSelector = document.querySelector(`${selector}`);
      cardSelector.appendChild(articleMaker);
    })
    const articlesJquery = resp.data.articles.jquery;
    articlesJquery.forEach(article => {
      const articleMaker = Card(article);
      const cardSelector = document.querySelector(`${selector}`);
      cardSelector.appendChild(articleMaker);
    })
    const articlesNode = resp.data.articles.node;
    articlesNode.forEach(article => {
      const articleMaker = Card(article);
      const cardSelector = document.querySelector(`${selector}`);
      cardSelector.appendChild(articleMaker);
    })
    const articlesTechnology = resp.data.articles.technology;
    articlesTechnology.forEach(article => {
      const articleMaker = Card(article);
      const cardSelector = document.querySelector(`${selector}`);
      cardSelector.appendChild(articleMaker);
    })
    // console.log(articlesBootstrap)
    
  })
  .catch(err => {
    console.log(err);
  })
  
}

export { Card, cardAppender }

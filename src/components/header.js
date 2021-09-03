const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  // Instantiating the elements
  const headerDiv = document.createElement('div');
  const headerDate = document.createElement('span');
  const headerTitle = document.createElement('h1');
  const headerTemp = document.createElement('span');

  // Assigning classes and content to elements
  headerDiv.classList.add('header');
  headerDate.classList.add('date');
  headerTemp.classList.add('temp');

  headerDate.textContent = date;
  headerTitle.textContent = title;
  headerTemp.textContent = temp;

  // Setting up structure of header
  headerDiv.appendChild(headerDate);
  headerDiv.appendChild(headerTitle);
  headerDiv.appendChild(headerTemp);

  // Returning the header div
  return headerDiv;
}



const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.

  //  Selecting the DOM element by its selector
  const elementSelector = document.querySelector(`${selector}`);
  // Calling the header function
  const newHeader = Header("Alaska", "September 3rd, 2021", 54);
  // Appending the header to the DOM
  elementSelector.appendChild(newHeader);
}

export { Header, headerAppender }

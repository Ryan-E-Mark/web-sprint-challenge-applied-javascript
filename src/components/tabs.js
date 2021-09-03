import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  // Instantiating the topics div and giving it a class
  const topicsDiv = document.createElement('div');
  topicsDiv.classList.add('topics');

  // Running a forEach to create the nested topics out of array data
  topics.forEach(string => {
    const topic = document.createElement('div');
    topic.classList.add('tab');
    topic.textContent = string;
    topicsDiv.appendChild(topic);
  })

  // Returning the topics div 
  return topicsDiv;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  axios.get(`http://localhost:5000/api/topics`)
  .then(resp => {
    const topicData = resp.data.topics;
    // console.log(topicData);
    const topicMaker = Tabs(topicData);
    const appender = document.querySelector(`${selector}`);
    appender.appendChild(topicMaker);
  })
  .catch(err => {
    console.log(err);
  })
  .finally (() => {
    // console.log(topicData);
  })
}

export { Tabs, tabsAppender }

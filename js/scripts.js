// Get form elements
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const submitButton = document.getElementById('submit-button');

const pageHeader = document.getElementById('page-header');

pageHeader.classList.remove('bg-dark');
pageHeader.classList.add('bg-primary');

const api = 'https://master-7rqtwti-fus3tltfddn7w.eu-2.platformsh.site';

// Get DOM elements for showing response
const responseMessage = document.getElementById('response-message');
const responseTitle = document.getElementById('response-title');
const responseContent = document.getElementById('response-content');

submitButton.addEventListener('click', ($event) => {
  $event.preventDefault();
  const post = {
    title: titleInput.value,
    content: contentInput.value,
  };
});

function makeRequest(data) => {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest {
      request.open('POST', api + '/create-post');
      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          if (request.status === 201) {
            resolve(JSON.parse(request.response));
          } else {
            reject(JSON.parse(request.response));
          }
        }
      }
    };
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(data));
  });
};

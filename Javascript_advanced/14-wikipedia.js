// Function to create a paragraph element and append it to the document body
function createElement(data) {
  const paragraph = document.createElement("p");

  paragraph.textContent = data;
  document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
  const xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*"
  );

  xhr.onload = function () {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      const extract =
        response.query.pages[Object.keys(response.query.pages)[0]].extract;
      callback(extract);
    } else {
      console.error("Error fetching data from Wikipedia");
    }
  };
  xhr.send();
}
queryWikipedia(createElement);

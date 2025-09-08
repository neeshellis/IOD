fetch("http://localhost:3000/pricingItems") // request data from this server// when it completes, access the JSON fromthe HTTP response sent by resolved promise
  .then((response) => response.json()) // .json() also returns a promise
  .then((json) => populate(json)) // log the returned JSON to the browser console
  .catch((error) => console.error(error)); // if there was an error, log that too

function addCard(title, description, image, price) {
  // clone the template
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);

  // populate the template
  template.querySelector(".card-title").innerText = title;
  template.querySelector(".card-description").innerText = description;
  template.querySelector(".card-image").src = image;
  template.querySelector(".card-image").alt = title;
  template.querySelector(".card-price").innerText = price;

  // include the populated template into the page
  document.querySelector("#card-list").appendChild(template);
}

function populate(json) {
  json.forEach((item) => {
    addCard(item.title, item.description, item.image, `${item.price}`);
  });
}

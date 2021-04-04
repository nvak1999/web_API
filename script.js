const API_KEY = "563492ad6f91700001000001c2f2503f84dd4f78bfd1c5e0d6ce9653";

let getImage = async () => {
  const baseURL = "https://api.pexels.com/v1/curated?page=1&per_page=80";
  const response = await fetch(baseURL, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: API_KEY,
    },
  });
  const data = await response.json();
  console.log(data);
  let images = data.photos;
  console.log(images);
  renderDataImage(images);
};

function renderDataImage(images) {
  const listImagesHTML = images
    .map((image) => {
      return `<a href="${image.url}"><img src="${image.src.medium}"></a> `;
    })
    .join("");
  document.getElementById("getImg").innerHTML = listImagesHTML;
}

getImage();

function onclickinsearch() {
  console.log("ASAS");
  document.getElementById("search-more-bottom").innerHTML = `
  <div class="nav-search-bottom">
  <div class="motherbox1">
  <button class="btn btn-success" type="submit" id="button-topic">City</button>
  <button class="btn btn-success" type="submit" id="button-topic">Holi</button>
  <button class="btn btn-success" type="submit" id="button-topic">Pretty</button>
  </div>
  <div class="motherbox2">
  <button class="btn btn-success" type="submit" id="button-topic">Natural</button>
  <button class="btn btn-success" type="submit" id="button-topic">Plant</button>
  <button class="btn btn-success" type="submit" id="button-topic">People</button>
  </div>
  <div class="motherbox3">
  <button class="btn btn-success" type="submit" id="button-topic">Animal</button>
  <button class="btn btn-success" type="submit" id="button-topic">Special</button>
  <button class="btn btn-success" type="submit" id="button-topic">Miracle</button>
  </div>
  <div class="motherbox4">
  <button class="btn btn-success" type="submit" id="button-topic">Ocean</button>
  <button class="btn btn-success" type="submit" id="button-topic">House</button>
  <button class="btn btn-success" type="submit" id="button-topic">Environment</button>
  </div>
  </div>
   `;
  document.getElementById("search-more-bottom").focus;
}

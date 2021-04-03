const API_KEY = "563492ad6f917000010000017e95324e49094d6d84bbce34fa6d31da";

let getImage = async () => {
  const baseURL = "https://api.pexels.com/v1/curated?page=99&per_page=80";
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
      return `<img src="${image.src.medium}">`;
    })
    .join("");
  document.getElementById("getImg").innerHTML = listImagesHTML;
}
getImage();
let step = 80;
// const searchFunction
// = async () => {
//   const baseSearchURL = `https://api.pexels.com/v1/search?query=bikini&per_page=${step}`;
//   const response = await fetch(baseSearchURL, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       Authorization: API_KEY,
//     },
//   });
//   const data = await response.json();
//   console.log(data);
//   let images = data.photos;
//   console.log(images);
//   renderDataImage(images);
// };
// searchFunction();

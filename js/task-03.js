const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ulGalleryRef = document.querySelector(".gallery");

let liMarkup = images.map(({ url, alt }) => {
  return `<li><img src="${url}" alt="${alt}" width="250px"></img></li>`;
});

ulGalleryRef.insertAdjacentHTML("afterbegin", liMarkup.join(""));

ulGalleryRef.style.listStyle = "none";
ulGalleryRef.style.display = "flex";
ulGalleryRef.style.justifyContent = "space-between";

//--------------------------------
// const ulGalleryRef = document.querySelector(".gallery");

// const markupFn = ({ url, alt }) => {
//   return `<li><img src="${url}" alt="${alt}" width="250px"></img></li>`;
// };

// const markupFnAllObj = images.map(markupFn).join("");
// console.log(markupFnAllObj);

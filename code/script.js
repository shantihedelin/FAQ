// A function that adds and removes the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
const section1Element = document.getElementById("section1");
const section2Element = document.getElementById("section2");
const section3Element = document.getElementById("section3");

section1Element.addEventListener("click", toggle);
section2Element.addEventListener("click", toggle);
section3Element.addEventListener("click", toggle);

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}

async function fetchData() {
  const data = await getPosts();

  // Skapa en container för inläggen
  const postsContainer = document.createElement("div");
  postsContainer.classList.add("posts-container");
  document.body.appendChild(postsContainer);

  data.forEach((post, index) => {
    const postsEl = document.createElement("div");
    postsEl.classList.add("section");
    postsEl.innerHTML = `<div class="title"><i class="fa-solid fa-chevron-down"></i>${post.title}</div> <div class="description">${post.body}</div>`;
  
    // Använd index för att bestämma om det är en jämn eller ojämn titel
    postsEl
      .querySelector(".title")
      .classList.add(index % 2 === 0 ? "even" : "odd");
  
    postsContainer.appendChild(postsEl);
  
    // Lägg till klickhändelselyssnare på den genererade titeln
    postsEl.querySelector(".title").addEventListener("click", toggle);
  });
  
}

fetchData(); // Anropa fetch-funktionen för att visa datan från json. 




const posts = [
  {
    titel: "card1",
    body: "body2",
  },
  {
    titel: "card1",
    body: "body3",
  },
  {
    titel: "card1",
    body: "body4",
  },
];
const postsElement = document.querySelector(".posts");
const loadAllData = () => {
  posts.map((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
         <h4 class="post-title">${post.titel}</h4>
        <p class="post-body">${post.body}</p>
    `;
    postsElement.appendChild(postElement);
  });
};
loadAllData();

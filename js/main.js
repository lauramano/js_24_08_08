'use strict';
console.log('Labas main.js');

// Taikomes
const postContainerEl = document.querySelector('.posts-container');


// eiga
function init(){
    getPostsFromApi(baseUrl)
}
init();

// AddeventListner


// Funkcijos
async function getPostsFromApi(url) {
   const resp = await fetch(url);
   const dataBack = await resp.json(); 
   const posts = dataBack.posts;
   console.log('posts', posts);
   return posts;
}

function makePostsList(arr) {
    // generuoti viena post i masyva
    postsContainerEl.innerHTML = '';
    // generate one post in a loop
    const htmlElArr = arr.map((pObj) => makeOnePostHtml(pObj));
    postsContainerEl.append(...htmlElArr);
    // spread operator
    // ...[1, 2, 4] => 1, 2 ,3
}

function makeOnePostHtml(postObj) {
    const divEl = document.createElement('div');
    divEl.className = 'post';
    divEl.innerHTML = `
    <ul class="post-tags">
  ${makeTagsHtml(postObj.tags)}  
  </ul>
  <p class="post__reactions"><span>${postObj.reactions}</span> reactions</p>
  <h3>${postObj.title}</h3>
  <p class="post__text">${postObj.body.slice(0, 15)}...</p>
  <a class="post__link" href="single-post.html">Read more > </a>
  `;
    return divEl;
}


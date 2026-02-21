const fallbackPosts = [
  {"image":"./instagram/raw/C3GDWOTJQWj.jpg","postUrl":"https://www.instagram.com/p/C3GDWOTJQWj/","alt":"@shubharamabh22 Instagram photo"},
  {"image":"./instagram/raw/C6hKppOP7pQ.jpg","postUrl":"https://www.instagram.com/p/C6hKppOP7pQ/","alt":"@shubharamabh22 Instagram photo"},
  {"image":"./instagram/raw/Ci_vTdhO-G1.jpg","postUrl":"https://www.instagram.com/p/Ci_vTdhO-G1/","alt":"@shubharamabh22 Instagram photo"},
  {"image":"./instagram/raw/CjB9lqGJ98L_1.jpg","postUrl":"https://www.instagram.com/p/CjB9lqGJ98L/","alt":"@shubharamabh22 Instagram photo"},
  {"image":"./instagram/raw/CjB9lqGJ98L_2.jpg","postUrl":"https://www.instagram.com/p/CjB9lqGJ98L/","alt":"@shubharamabh22 Instagram photo"},
  {"image":"./instagram/raw/CjB9lqGJ98L_3.jpg","postUrl":"https://www.instagram.com/p/CjB9lqGJ98L/","alt":"@shubharamabh22 Instagram photo"},
  {"image":"./instagram/raw/CjB9lqGJ98L_4.jpg","postUrl":"https://www.instagram.com/p/CjB9lqGJ98L/","alt":"@shubharamabh22 Instagram photo"},
  {"image":"./instagram/raw/CjB9lqGJ98L_5.jpg","postUrl":"https://www.instagram.com/p/CjB9lqGJ98L/","alt":"@shubharamabh22 Instagram photo"},
  {"image":"./instagram/raw/CjB9lqGJ98L_6.jpg","postUrl":"https://www.instagram.com/p/CjB9lqGJ98L/","alt":"@shubharamabh22 Instagram photo"},
  {"image":"./instagram/raw/CjB9lqGJ98L_7.jpg","postUrl":"https://www.instagram.com/p/CjB9lqGJ98L/","alt":"@shubharamabh22 Instagram photo"},
  {"image":"./instagram/raw/CjB9lqGJ98L_8.jpg","postUrl":"https://www.instagram.com/p/CjB9lqGJ98L/","alt":"@shubharamabh22 Instagram photo"},
  {"image":"./instagram/raw/Cjg8rbOrUd4_1.jpg","postUrl":"https://www.instagram.com/p/Cjg8rbOrUd4/","alt":"@shubharamabh22 Instagram photo"},
  {"image":"./instagram/raw/Cjg8rbOrUd4_2.jpg","postUrl":"https://www.instagram.com/p/Cjg8rbOrUd4/","alt":"@shubharamabh22 Instagram photo"},
  {"image":"./instagram/raw/Cjg8rbOrUd4_3.jpg","postUrl":"https://www.instagram.com/p/Cjg8rbOrUd4/","alt":"@shubharamabh22 Instagram photo"},
  {"image":"./instagram/raw/Cjg8rbOrUd4_4.jpg","postUrl":"https://www.instagram.com/p/Cjg8rbOrUd4/","alt":"@shubharamabh22 Instagram photo"},
  {"image":"./instagram/raw/Cjg8rbOrUd4_5.jpg","postUrl":"https://www.instagram.com/p/Cjg8rbOrUd4/","alt":"@shubharamabh22 Instagram photo"},
  {"image":"./instagram/raw/CjqWeGSp1YC_1.jpg","postUrl":"https://www.instagram.com/p/CjqWeGSp1YC/","alt":"@shubharamabh22 Instagram photo"},
  {"image":"./instagram/raw/CjqWeGSp1YC_2.jpg","postUrl":"https://www.instagram.com/p/CjqWeGSp1YC/","alt":"@shubharamabh22 Instagram photo"},
  {"image":"./instagram/raw/CjqWeGSp1YC_4.jpg","postUrl":"https://www.instagram.com/p/CjqWeGSp1YC/","alt":"@shubharamabh22 Instagram photo"},
  {"image":"./instagram/raw/CkEKU91J-py_1.jpg","postUrl":"https://www.instagram.com/p/CkEKU91J-py/","alt":"@shubharamabh22 Instagram photo"},
  {"image":"./instagram/raw/CkEKU91J-py_2.jpg","postUrl":"https://www.instagram.com/p/CkEKU91J-py/","alt":"@shubharamabh22 Instagram photo"},
  {"image":"./instagram/raw/CqAZezLuSIr.jpg","postUrl":"https://www.instagram.com/p/CqAZezLuSIr/","alt":"@shubharamabh22 Instagram photo"},
  {"image":"./instagram/raw/CrO26ZDvy5K.jpg","postUrl":"https://www.instagram.com/p/CrO26ZDvy5K/","alt":"@shubharamabh22 Instagram photo"},
  {"image":"./instagram/raw/DARjRSiz5pR_2.jpg","postUrl":"https://www.instagram.com/p/DARjRSiz5pR/","alt":"@shubharamabh22 Instagram photo"},
  {"image":"./instagram/raw/DARjRSiz5pR_3.jpg","postUrl":"https://www.instagram.com/p/DARjRSiz5pR/","alt":"@shubharamabh22 Instagram photo"},
  {"image":"./instagram/raw/DARjRSiz5pR_4.jpg","postUrl":"https://www.instagram.com/p/DARjRSiz5pR/","alt":"@shubharamabh22 Instagram photo"},
  {"image":"./instagram/raw/DARjRSiz5pR_5.jpg","postUrl":"https://www.instagram.com/p/DARjRSiz5pR/","alt":"@shubharamabh22 Instagram photo"},
  {"image":"./instagram/raw/DARjRSiz5pR_6.jpg","postUrl":"https://www.instagram.com/p/DARjRSiz5pR/","alt":"@shubharamabh22 Instagram photo"},
  {"image":"./instagram/raw/DARjRSiz5pR_7.jpg","postUrl":"https://www.instagram.com/p/DARjRSiz5pR/","alt":"@shubharamabh22 Instagram photo"},
  {"image":"./instagram/raw/DQ5cSx2if-0.jpg","postUrl":"https://www.instagram.com/p/DQ5cSx2if-0/","alt":"@shubharamabh22 Instagram photo"}
];

const yearNode = document.getElementById("year");
if (yearNode) yearNode.textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;
    event.preventDefault();
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

function renderGallery(posts) {
  const gallery = document.getElementById("galleryGrid");
  const postCount = document.getElementById("postCount");
  if (!gallery || !postCount) return;

  if (!Array.isArray(posts) || posts.length === 0) {
    gallery.innerHTML = `
      <article class="photo-card placeholder-card">
        <p>Photos are being prepared. Please refresh in a moment.</p>
      </article>
    `;
    postCount.textContent = "0";
    return;
  }

  gallery.innerHTML = "";
  postCount.textContent = `${posts.length}+`;

  posts.forEach((post, index) => {
    const card = document.createElement(post.postUrl ? "a" : "article");
    card.className = "photo-card";
    if (post.postUrl) {
      card.href = post.postUrl;
      card.target = "_blank";
      card.rel = "noreferrer";
    }
    card.style.animation = `rise 0.55s ${index * 45}ms both`;

    const image = document.createElement("img");
    image.loading = "lazy";
    image.src = post.image;
    image.alt = post.alt || "@shubharamabh22 Instagram photo";
    card.appendChild(image);
    gallery.appendChild(card);
  });
}

async function loadInstagramGallery() {
  try {
    const response = await fetch("./instagram/posts.json", { cache: "no-store" });
    if (!response.ok) throw new Error("posts.json missing");
    const posts = await response.json();
    renderGallery(posts);
  } catch (error) {
    renderGallery(fallbackPosts);
  }
}

loadInstagramGallery();

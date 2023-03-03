let projectData = [
  {
    image: "img/project-1.png",
    name: "Python DRF",
    detail: "Lorem ipsum dolor sit amet",
    github: "https://github.com/fernandogfleite",
    tags: "#python, #drf, #todos",
  },
  {
    image: "img/project-2.png",
    name: "DRF",
    detail: "Lorem ipsum dolor sit amet",
    github: "https://github.com/fernandogfleite",
    tags: "#drf, #todos",
  },
  {
    image: "img/project-3.png",
    name: "Node",
    detail: "Lorem ipsum dolor sit amet",
    github: "https://github.com/fernandogfleite",
    tags: "#node, #todos",
  },
];

const createProjectCards = (data) => {
  let projectContainer = document.querySelector(".project-container");

  projectContainer.innerHTML += `
          <div class="project-card" data-tags="${data.tags}">
              <div class="project-wrapper">
                  <div class="project-thumbnail">
                      <img src="img/close.png" class="close-btn" alt="">
                      <img src="${data.image}" class="project-img" alt="">
                      <span class="tags">${data.tags}</span>
                  </div>

                  <div class="project-body">
                      <h1 class="project-name">${data.name}</h1>
                      <p class="project-detail">${data.detail}</p>
                      <a href="${data.github}" class="btn">github</a>
                  </div>
              </div>
          </div>
  `;
};

projectData.forEach((data) => createProjectCards(data));

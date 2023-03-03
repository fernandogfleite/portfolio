let projectData = [
  {
    image: "assets/img/project-1.png",
    name: "RSA Web",
    detail:
      "O projeto consiste na criação de uma chave pública e uma privada utilizando números primos grandes para criptografar e descriptografar mensagens.",
    github: "https://github.com/fernandogfleite/md-web",
    tags: "#python, #django, #todos",
  },
];

const createProjectCards = (data) => {
  let projectContainer = document.querySelector(".project-container");

  projectContainer.innerHTML += `
          <div class="project-card" data-tags="${data.tags}">
              <div class="project-wrapper">
                  <div class="project-thumbnail">
                      <img src="assets/img/close.png" class="close-btn" alt="">
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

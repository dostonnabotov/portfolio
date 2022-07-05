/* =========== PROJECTS =========== */
import data from './data.json' assert {type: 'json'};
const projects = document.querySelector("[data-projects]");

for (let i = 0; i < data.length; i++) {
  const projectTemplate = `
      <div class="project flow">
        <div class="project__img">
          <a href=${data[i].link} target="_blank" rel="noopener noreferrer">
            <img src=${data[i].img} alt=${data[i].title} />
          </a>
        </div>
        <div class="project__body flow">
          <h3 class="fs-600 text-light">${data[i].title}</h3>
          <p>${data[i].info}</p>
        </div>
        <div class="project__meta flex">
          <a href=${data[i].github} target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github"></i> Github
          </a>
          <a href=${data[i].link} target="_blank" rel="noopener noreferrer">
            <i class="fas fa-link"></i> Live Site
          </a>
        </div>
      </div>
  `

  projects.innerHTML += projectTemplate;
}

/* =========== BACK TO TOP & NAVIGATION STYLE =========== */
// Reference: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
const backToTop = document.getElementById("backToTop");
const headerEL = document.getElementById("header");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    backToTop.style.display = "block";
    headerEL.style.boxShadow = "0 1px 15px 2px hsl(0, 0%, 0%, .4)"
  } else {
    backToTop.style.display = "none";
    headerEL.style.boxShadow = "none";
  }
}

backToTop.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})
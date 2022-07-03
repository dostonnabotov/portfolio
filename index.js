/* =========== Template =========== */
const data = [
  {
    title: "Social Media Dashboard",
    info: "Social Media Dashboard with theme switcher",
    github: "https://github.com/dostonnabotov/social-media-dashboard-with-theme-switcher",
    link: "https://dostonnabotov.github.io/social-media-dashboard-with-theme-switcher/",
    img: "./assets/images/setup.jpg",
  },
  {
    title: "Advice Generator App",
    info: "Advice Generator App generates advice with help of API",
    github: "https://github.com/dostonnabotov/advice-generator-app",
    link: "https://dostonnabotov.github.io/advice-generator-app",
    img: "./assets/images/setup.jpg",
  },
  {
    title: "Basketball Scoreboard",
    info: "Basketball Scoreboard keeps track of scores between HOME and GUEST players",
    github: "https://github.com/dostonnabotov/basketball-scoreboard",
    link: "https://dostonnabotov.github.io/basketball-scoreboard",
    img: "./assets/images/setup.jpg",
  }
]

if ('content' in document.createElement('template')) {
  var projects = document.querySelector("[data-projects]");
  var template = document.querySelector("[data-project='template']");

  for (let i = 0; i < data.length; i++) {
    var clone = template.content.cloneNode(true);
    const titleEl = clone.querySelector("[data-project='title']");
    const githubEl = clone.querySelector("[data-project='github']");
    const linkEl = clone.querySelectorAll("[data-project='link']");
    const infoEl = clone.querySelector("[data-project='info']");
    const imgEl = clone.querySelector("[data-project='img']");

    titleEl.innerText = data[i].title;
    infoEl.innerText = data[i].info;
    githubEl.setAttribute("href", data[i].github);

    setAttributes(imgEl, {
      "src": data[i].img,
      "alt": data[i].title,
      "title": data[i].title
    });
    
    linkEl.forEach(el => {
      el.setAttribute("href", data[i].link);
    });

    // helper function to set several attributes at once
    function setAttributes(el, attrs) {
      for(var key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
    }
    
    projects.appendChild(clone);
  }

} else {
// Find another way to add the rows to the table because
// the HTML template element is not supported.
}

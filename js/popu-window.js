// Data Cards Array

const cardetails = [
  {
    title: 'Multi-Post Stories',
    img: './images/stories-img.png',
    textcontent: 'A daily selection of privately personalized reads; no accounts or sign-ups required has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    technologies: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    btntext: 'See Project',
  },

  {
    title: 'Profesional Art Printing Data',
    textcontent: 'A daily selection of privately personalized reads no accounts or sign-ups required. has been the industrys standard',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    btntext: 'See Project',
  },
  {
    title: 'Data Dashboard Healthcare',
    textcontent: 'A daily selection of privately personalized reads no accounts or sign-ups required. has been the industrys standard',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    btntext: 'See Project',
  },
  {
    title: 'Website Portfolio',
    textcontent: 'A daily selection of privately personalized reads no accounts or sign-ups required. has been the industrys standard',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    btntext: 'See Project',
  },
];

const worksSectionContainer = document.querySelector('#portfolio');
const workHead = document.createElement('div');
const worksCards = document.createElement('section');

workHead.className = 'works-head';
workHead.innerHTML = `<h2 class="works-title">My Recent Works</h2>
<hr class="vector-works vector-works-desktop ">`;
worksSectionContainer.appendChild(workHead);
worksCards.className = 'works-info-section works-info-desktop';
worksCards.innerHTML = `<div class="multi-post-stories stories-desktop">
  <img class="stories-image" src=${cardetails[0].img} alt="GymFit Exercise Yoga">
  <div>
    <h2 class="multi-post-title">${cardetails[0].title}</h2>
    <p class="support-text-multi-post">
    ${cardetails[0].textcontent}
    </p>
    <ul class="tags-container">
      <li class="tag-title"><a href="#">${cardetails[0].technologies[0]}</a></li>
      <li class="tag-title"><a href="#">${cardetails[0].technologies[1]}</a></li>
      <li class="tag-title"><a href="#">${cardetails[0].technologies[2]}</a></li>
      <li class="tag-title"><a href="#">${cardetails[0].technologies[3]}</a></li>
    </ul>
    <button id="see-project" class="button-see-project button-card" type="button">${cardetails[0].btntext}</button>
  </div>
</div> 
<div id="worksCards" class="works-area-cards works-cards-desktop">
  <div class="cards-work-container cards-work-desktop">
    <h3 class="cards-work-title">${cardetails[1].title}</h3>
    <p class="support-text-cards-work">${cardetails[1].textcontent}
    </p>
    <ul class="tag-cards-work-container">
      <li class="tag-title"><a href="#">${cardetails[1].technologies[0]}</a></li>
      <li class="tag-title"><a href="#">${cardetails[1].technologies[1]}</a></li>
      <li class="tag-title"><a href="#">${cardetails[1].technologies[2]}</a></li>
    </ul>
    <button class="button-cards-work button-card" type="button">${cardetails[1].btntext}</button>
  </div>
  <div class="cards-work-container cards-work-desktop">
    <h3 class="cards-work-title">${cardetails[2].title}</h3>
    <p class="support-text-cards-work">${cardetails[2].textcontent}
    </p>
    <ul class="tag-cards-work-container">
      <li class="tag-title"><a href="#">${cardetails[2].technologies[0]}</a></li>
      <li class="tag-title"><a href="#">${cardetails[2].technologies[1]}</a></li>
      <li class="tag-title"><a href="#">${cardetails[2].technologies[2]}</a></li>
    </ul>
    <button class="button-cards-work button-card" type="button">${cardetails[2].btntext}</button>
  </div>
  <div class="cards-work-container cards-work-desktop">
    <h3 class="cards-work-title">${cardetails[3].title}</h3>
    <p class="support-text-cards-work">${cardetails[3].textcontent}
    </p>
    <ul class="tag-cards-work-container">
      <li class="tag-title"><a href="#">${cardetails[3].technologies[0]}</a></li>
      <li class="tag-title"><a href="#">${cardetails[3].technologies[1]}</a></li>
      <li class="tag-title"><a href="#">${cardetails[3].technologies[2]}</a></li>
    </ul>
    <button class="button-cards-work button-card" type="button">${cardetails[3].btntext}</button>
  </div>
  <div class="cards-work-container cards-work-desktop">
    <h3 class="cards-work-title">${cardetails[1].title}</h3>
    <p class="support-text-cards-work">${cardetails[1].textcontent}
    </p>
    <ul class="tag-cards-work-container">
      <li class="tag-title"><a href="#">${cardetails[1].technologies[0]}</a></li>
      <li class="tag-title"><a href="#">${cardetails[1].technologies[1]}</a></li>
      <li class="tag-title"><a href="#">${cardetails[1].technologies[2]}</a></li>
    </ul>
    <button class="button-cards-work button-card" type="button">${cardetails[1].btntext}</button>
  </div>
  <div class="cards-work-container cards-work-desktop">
    <h3 class="cards-work-title">${cardetails[2].title}</h3>
    <p class="support-text-cards-work">${cardetails[2].textcontent}
    </p>
    <ul class="tag-cards-work-container">
      <li class="tag-title"><a href="#">${cardetails[2].technologies[0]}</a></li>
      <li class="tag-title"><a href="#">${cardetails[2].technologies[1]}</a></li>
      <li class="tag-title"><a href="#">${cardetails[2].technologies[2]}</a></li>
    </ul>
    <button class="button-cards-work button-card" type="button">${cardetails[2].btntext}</button>
  </div>
  <div class="cards-work-container cards-work-desktop">
  <h3 class="cards-work-title">${cardetails[3].title}</h3>
  <p class="support-text-cards-work">${cardetails[3].textcontent}
  </p>
  <ul class="tag-cards-work-container">
    <li class="tag-title"><a href="#">${cardetails[3].technologies[0]}</a></li>
    <li class="tag-title"><a href="#">${cardetails[3].technologies[1]}</a></li>
    <li class="tag-title"><a href="#">${cardetails[3].technologies[2]}</a></li>
  </ul>
  <button class="button-cards-work button-card" type="button">${cardetails[3].btntext}</button>
</div>
</div>`;
worksSectionContainer.appendChild(worksCards);

const buttons = document.querySelectorAll('.button-card');

// Get the modal
const modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

const spanone = () => {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
const close = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

window.addEventListener('click', close);
span.addEventListener('click', spanone);

// add Listener Event to each see-project button
for (let i = 0; i <= buttons.length; i += 1) {
  buttons[i].addEventListener('click', () => {
    modal.style.display = 'block';
  });
}
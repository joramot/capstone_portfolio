const worksSectionContainer = document.querySelector('#portfolio');
const workHead = document.createElement('div');
const worksCards = document.createElement('section');

workHead.className = 'works-head';
workHead.innerHTML = `<h2 class="works-title">My Recent Works</h2>
<hr class="vector-works vector-works-desktop ">`;
worksSectionContainer.appendChild(workHead);
worksCards.className = 'works-info-section works-info-desktop';
worksCards.innerHTML = `<div class="multi-post-stories stories-desktop">
  <img class="stories-image" src="./images/stories-img.png" alt="GymFit Exercise Yoga">
  <div>
    <h2 class="multi-post-title">Multi-Post Stories</h2>
    <p class="support-text-multi-post">
      A daily selection of privately personalized reads; no accounts or sign-ups required.
      has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
      standard dummy text.
    </p>
    <ul class="tags-container">
      <li class="tag-title"><a href="#">css</a></li>
      <li class="tag-title"><a href="#">html</a></li>
      <li class="tag-title"><a href="#">bootstrap</a></li>
      <li class="tag-title"><a href="#">Ruby</a></li>
    </ul>
    <button id="see-project" class="button-see-project button-card" type="button">See Project</button>
  </div>
</div> 
<div id="worksCards" class="works-area-cards works-cards-desktop">
  <div class="cards-work-container cards-work-desktop">
    <h3 class="cards-work-title">Profesional Art Printing Data</h3>
    <p class="support-text-cards-work">A daily selection of privately personalized reads;
      no accounts or sign-ups required. has been the industry's standard
    </p>
    <ul class="tag-cards-work-container">
      <li class="tag-title"><a href="#">html</a></li>
      <li class="tag-title"><a href="#">bootstrap</a></li>
      <li class="tag-title"><a href="#">Ruby</a></li>
    </ul>
    <button class="button-cards-work button-card" type="button">See Project</button>
  </div>
  <div class="cards-work-container cards-work-desktop">
    <h3 class="cards-work-title">Profesional Art Printing Data</h3>
    <p class="support-text-cards-work">A daily selection of privately personalized reads;
      no accounts or sign-ups required. has been the industry's standard
    </p>
    <ul class="tag-cards-work-container">
      <li class="tag-title"><a href="#">html</a></li>
      <li class="tag-title"><a href="#">bootstrap</a></li>
      <li class="tag-title"><a href="#">Ruby</a></li>
    </ul>
    <button class="button-cards-work button-card" type="button">See Project</button>
  </div>
  <div class="cards-work-container cards-work-desktop">
    <h3 class="cards-work-title">Profesional Art Printing Data</h3>
    <p class="support-text-cards-work">A daily selection of privately personalized reads;
      no accounts or sign-ups required. has been the industry's standard
    </p>
    <ul class="tag-cards-work-container">
      <li class="tag-title"><a href="#">html</a></li>
      <li class="tag-title"><a href="#">bootstrap</a></li>
      <li class="tag-title"><a href="#">Ruby</a></li>
    </ul>
    <button class="button-cards-work button-card" type="button">See Project</button>
  </div>
  <div class="cards-work-container cards-work-desktop">
    <h3 class="cards-work-title">Profesional Art Printing Data</h3>
    <p class="support-text-cards-work">A daily selection of privately personalized reads;
      no accounts or sign-ups required. has been the industry's standard
    </p>
    <ul class="tag-cards-work-container">
      <li class="tag-title"><a href="#">html</a></li>
      <li class="tag-title"><a href="#">bootstrap</a></li>
      <li class="tag-title"><a href="#">Ruby</a></li>
    </ul>
    <button class="button-cards-work button-card" type="button">See Project</button>
  </div>
  <div class="cards-work-container cards-work-desktop">
    <h3 class="cards-work-title">Profesional Art Printing Data</h3>
    <p class="support-text-cards-work">A daily selection of privately personalized reads;
      no accounts or sign-ups required. has been the industry's standard
    </p>
    <ul class="tag-cards-work-container">
      <li class="tag-title"><a href="#">html</a></li>
      <li class="tag-title"><a href="#">bootstrap</a></li>
      <li class="tag-title"><a href="#">Ruby</a></li>
    </ul>
    <button class="button-cards-work button-card" type="button">See Project</button>
  </div>
  <div class="cards-work-container cards-work-desktop">
    <h3 class="cards-work-title">Profesional Art Printing Data</h3>
    <p class="support-text-cards-work">A daily selection of privately personalized reads;
      no accounts or sign-ups required. has been the industry's standard
    </p>
    <ul class="tag-cards-work-container">
      <li class="tag-title"><a href="#">html</a></li>
      <li class="tag-title"><a href="#">bootstrap</a></li>
      <li class="tag-title"><a href="#">Ruby</a></li>
    </ul>
    <button class="button-cards-work button-card" type="button">See Project</button>
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
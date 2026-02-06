// Всі елементи для появи при скролі
const faders = document.querySelectorAll('.fade-in');
const members = document.querySelectorAll('.member');
const contentBlocks = document.querySelectorAll('.content-block');

// Intersection Observer для появи елементів при скролі
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    obs.unobserve(entry.target);
  });
}, observerOptions);

// Стежимо за елементами з класом fade-in
faders.forEach(fader => observer.observe(fader));

// Поступова поява карток команди
members.forEach((member, i) => {
  setTimeout(() => {
    member.classList.add('show');
  }, i * 4000); // затримка 4000ms між картками
});

// Поступова поява блоків контенту
contentBlocks.forEach((block, i) => {
  setTimeout(() => {
    block.classList.add('show');
  }, i * 6000); // затримка 6000ms між блоками
});

// Паралакс header та плавна зміна фону
const header = document.querySelector('.header');
const logo = document.querySelector('.logo');
const projectTitle = document.querySelector('.project-title');
const projectSlogan = document.querySelector('.project-slogan');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Паралакс: лого та заголовки рухаються повільніше
  logo.style.transform = `translateY(${scrollY * 0.2}px)`;
  projectTitle.style.transform = `translateY(${scrollY * 0.15}px)`;
  projectSlogan.style.transform = `translateY(${scrollY * 0.1}px)`;

  // Плавна зміна фону header
  const opacity = Math.min(scrollY / 400, 1); // обмежуємо до 1
  header.style.background = `rgba(230, 215, 194, ${1 - opacity})`;
});

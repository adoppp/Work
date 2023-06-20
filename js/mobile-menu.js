(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

const btnOff = document.querySelector('.scroll-off'); //класс для кнопки
const btnOn = document.querySelector('.scroll-on');   //класс ждя кнопки
const body = document.body;

function disableScroll() { 
	let pagePosition = window.scrollY;
	body.classList.add('disable-scroll'); // класс для боди
	body.dataset.position = pagePosition;
	body.style.top = -pagePosition + "px";
};

function enableScroll() { 
	let pagePosition = parseInt(body.dataset.position, 10);
	body.style.top = 'auto';
	body.classList.remove('disable-scroll');
	window.scroll({ top: pagePosition, left: 0 });
	body.removeAttribute('data-position');
};

btnOff.addEventListener('click', (e) => { 
	disableScroll();
});

btnOn.addEventListener('click', () => { 
	enableScroll();
});
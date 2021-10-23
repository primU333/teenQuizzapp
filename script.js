//Hamburger menu
const menuBtn      = document.querySelector('.menu-btn');
const menu         = document.querySelector('.menu');
const menuNav      = document.querySelector('.menu-nav');
const navItems     = document.querySelectorAll('.nav-item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showMenu = false;
    }
}

//Dark mode switch
const darkMode = document.querySelector('.dark-mode-switch');
const switchBtn = document.querySelector('.switch');
const body = document.querySelector('body');
const footer = document.querySelector('footer');

let toggle = false;

darkMode.addEventListener('click', toggleMode);

function toggleMode() {
	if(!toggle){
		darkMode.style.transform = 'rotate(180deg)';
		switchBtn.style.backgroundColor = '#000';
		body.style.backgroundColor = '#777'
		body.style.color = '#fff';
		footer.style.backgroundColor = '#fff';
		footer.style.color = '#000'

		toggle = true;
	} else {
		darkMode.style.transform = 'rotate(0deg)';
		switchBtn.style.backgroundColor ='#fff';
		body.style.backgroundColor = '#f5fffa'
		body.style.color = '#000';
		footer.style.backgroundColor = '#444';
		footer.style.color = '#fff'

		toggle = false;
	}
}
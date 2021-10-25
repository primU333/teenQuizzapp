//Hamburger menu
const menuBtn      = document.querySelector('.menu-btn');
const menu         = document.querySelector('.menu');
const menuNav      = document.querySelector('.menu-nav');
const navItems     = document.querySelectorAll('.nav-item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
	//check the state of showmenu
    if(!showMenu){
		//add the classes to show the nav menu
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

		//set showmenu to the opposite of what it was
        showMenu = true;
    } else {
		//add the classes to remove the nav menu
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

		//set showmenu to the opposite of what it was
        showMenu = false;
    }
}

//Dark mode switch
const darkMode = document.querySelector('.dark-mode-switch');
const switchBtn = document.querySelector('.switch');
const body = document.querySelector('body');
const profile = document.querySelector('.profile');

let toggle = false;

darkMode.addEventListener('click', toggleMode);

window.onload = checkTheme();

function checkTheme() {
	const theme = localStorage.getItem('theme');
	if(theme == 'dark'){
		darkMode.classList.add('rotate')
		switchBtn.classList.add('swt-dark')
		body.classList.add('dark')
		profile.classList.add('alt-dark')
	}
}

function toggleMode() {
	localStorage.getItem('theme');
	//check the state of toggle
	if(!toggle){
		darkMode.classList.add('rotate')
		switchBtn.classList.add('swt-dark')
		body.classList.add('dark')
		profile.classList.add('alt-dark')
		//set toggle to the opposite value
		toggle = true;

		//save the user theme
		localStorage.setItem('theme','dark');
	} else {
		darkMode.classList.remove('rotate')
		switchBtn.classList.remove('swt-dark')
		body.classList.remove('dark')
		profile.classList.remove('alt-dark')

		//set toggle to the opposite value
		toggle = false;

		//save the user theme
	localStorage.setItem('theme','light');
	}
}
<<<<<<< HEAD
//Display Navigation on mobile//

const nav = () =>{
	const burger = document.querySelector(".burger");
	const links = document.querySelector(".navlinks");

	burger.addEventListener("click", ()=>{
		links.classList.toggle("navlinks-open");
	})
}

nav();

//Add dark mode class//

const change_mode = ()=>{
	const dark_button = document.getElementById("dark-button");
	const dark_mode = document.body;

	dark_button.addEventListener("click", (e)=>{
		dark_mode.classList.toggle("dark");
		//e.preventDefualt();
	})
}

change_mode();


//Show developer info/

const show_info = ()=>{
	const icon = document.getElementById("dev-icon");
	const info = document.querySelector(".profile");

	icon.addEventListener("click", ()=>{
		info.classList.toggle("show-profile");
	})
}

show_info();


//show log in and sign up menu//

const show_menu = ()=>{
	const icon = document.getElementById("log-icon");
	const info = document.querySelector(".logIn");

	icon.addEventListener("click", ()=>{
		info.classList.toggle("logIn-show");
	})

}

show_menu();

//Home Page relaod//
=======
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
>>>>>>> 3fa3e6a83344b6a5f33312f2be0142cb30b01dbc

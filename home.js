//Open navigation and dasboard on mobile devices

//navigation menu

const openNav = () =>{
    const links = document.querySelector(".navlinks");
    const bars = document.querySelector(".burger");
    const closeNav = document.getElementById("main");

    bars.addEventListener("click", (e)=>{
        e.preventDefault();
        //bars.classList.toggle("burger-open");
        links.classList.toggle("navlinks-open");
    })

}

openNav();

//***********************Dashboard

const openBoard = () =>{
    const openBtn = document.querySelector(".show-board");
    const board = document.querySelector(".side-links");

    openBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        openBtn.classList.toggle("flip-board");
        board.classList.toggle("side-links-open");

    })
}
openBoard();

//Dark mode

const toggleMode = () =>{
    const link = document.getElementById("dark-button");
    const mode = document.body

    link.addEventListener("click", (e)=>{
        e.preventDefault();
        mode.classList.toggle("dark");
    })
}
toggleMode();




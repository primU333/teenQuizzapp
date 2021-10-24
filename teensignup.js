//navigation menu
const nav = () =>{
	const bars = document.querySelector(".burger");
	const links = document.querySelector(".navlinks");


	bars.addEventListener("click", ()=>{
		links.classList.toggle("navlinks-open")
	}) 
}

nav();

//Dark Mode

const mode = () =>{
	const dark = document.querySelector(".light");
	const change = document.getElementById("mode");

	change.addEventListener("click", (e)=>{
		e.preventDefault()
		dark.classList.toggle("dark")
	})
}
mode();

//form validatoion

<<<<<<< HEAD
 const validate = () =>{
 	const form = document.getElementById("myform");
 	//const boxes = document.querySelector(".input");
 	const firstName = document.getElementById("firstName");
 	const otherName = document.getElementById("OtherName");
 	const number = document.getElementById("number");
 	const email = document.getElementById("email");
 	const gender = document.getElementById("gender");
 	const birthday = document.getElementById("DOB");
 	const password = document.getElementById("password");
 	const password2 = document.getElementById("password2");

 	form.addEventListener("submit", checkInputs)

		function checkInputs(){
			 
			const firstNameValue = firstName.value.trim();
			const otherNameValue = otherName.value.trim();
			const numberValue = number.value.trim();
			const emailValue = email.value.trim();
			const genderValue = gender.value.trim();
			const birthdayValue = birthday.value.trim();
			const passwordValue = password.value.trim()
			const password2Value = password2.value.trim();

	//check password match
			if(password2Value === passwordValue){
				//display error
				alert("password not matching!!")

			}else{
				console.log("hi")
				//console.log("pw matched!");
			}

		}
 }

 validate();

=======
 const validator = () =>{

	const signUp  = document.getElementById("myform");
	const fName = document.getElementById("firstName");
	const oName = document.getElementById("OtherName");
	const mail = document.getElementById("email");
	const phone = document.getElementById("number");
	const age = document.getElementById("DOB");
	const pw = document.getElementById("password");
	const pw2 = document.getElementById("password2");


	signUp.addEventListener("click", checkInputs)
	function  checkInputs(e){
		e.preventDefault()
//password validation
		if(pw.value === ""){
			pw.classList.add("invalid-input");

		}else if(pw2.value === ""){
			pw2.classList.add("invalid-input");

		}else if(pw.value != pw2.value){
			pw.classList.add("invalid-input");
			pw2.classList.add("invalid-input");

		}else{
			pw.classList.add("valid-input");
			pw2.classList.add("valid-input");
		}

//User name validation

	
	
		if(fName.value ===""){
			fName.classList.add("invalid-input");

		}else{
			fName.classList.add("valid-input");
		}

		//Other name
		if(oName.value === ""){
			oName.classList.add("invalid-input");
		
		}else{
			oName.classList.add("valid-input");
		}

//phone validation
		if(phone.value > 111111111111 <= 999999999999){
			phone.classList.add("valid-input");
			
			}else{
				phone.classList.add("invalid-input");
			}


 }

 }

 validator();
>>>>>>> 3fa3e6a83344b6a5f33312f2be0142cb30b01dbc

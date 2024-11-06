const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const loginForm = document.querySelector('.login form'); 
const registerForm = document.querySelector('.register form'); 
const loginButton = document.querySelector('.btn'); 
const emailInput = document.querySelector('input[name="email"]'); 
const passwordInput = document.querySelector('input[name="pass"]'); 

if (wrapper && loginLink && registerLink && btnPopup && iconClose && loginForm && registerForm) {
    registerLink.addEventListener('click', () => { wrapper.classList.add('active'); });
    loginLink.addEventListener('click', () => { wrapper.classList.remove('active'); });
    btnPopup.addEventListener('click', () => { wrapper.classList.add('active-popup'); });
    iconClose.addEventListener('click', () => { wrapper.classList.remove('active-popup'); });

    loginButton.addEventListener("click", function(e) {
        e.preventDefault(); 

        const emailid = emailInput.value.trim(); 
        const password = passwordInput.value.trim(); 

        if (emailid === "" || password === "") {
            alert("Please enter both email and password.");
            return; 
        }

        const validEmail = "abc@gmail.com"; 
        const validPassword = "123456"; 

        if (emailid === validEmail && password === validPassword) {
            try {
                window.location.href = "main page.html"; 
            } catch (error) {
                console.error("Error redirecting to historicalplaces:", error);
            }
        } else {
            alert("Invalid email or password.");
        }
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        window.location.href = "main page.html"; 
    });
} else {
    console.error('One or more elements do not exist in the HTML');
}
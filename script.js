
const SAT_content= document.getElementById('SAT').innerHTML;
const ACT_content= document.getElementById('ACT').innerHTML;
const IELTS_content= document.getElementById('IELTS').innerHTML;
const TOEFL_content= document.getElementById('TOEFL').innerHTML;
const GRE_content= document.getElementById('GRE').innerHTML;
const GMAT_content= document.getElementById('GMAT').innerHTML;
const LSAT_content= document.getElementById('LSAT').innerHTML;
const MCAT_content= document.getElementById('MCAT').innerHTML;

const expandeddata = {
SAT: SAT_content,
ACT: ACT_content,
IELTS: IELTS_content,
TOEFL: TOEFL_content,
GRE: GRE_content,
GMAT: GMAT_content,
LSAT: LSAT_content,
MCAT: MCAT_content,

}



// opencontent function
function opencontent(test)
{

const box = document.getElementById('expand_box');
const overlay = document.getElementById('overlay');
box.style.display='block';
overlay.style.display='block';

// what should pop up when the user clicks on thecard
box.innerHTML = expandeddata[test];
}
// closecontent function
function closecontent(){
    document.getElementById('expand_box').style.display='none';
    document.getElementById('overlay').style.display='none';

}
 
// jquery for closing expanded content when clicking the overlay or background outside the content box
$(document).ready(function(){
    $('#overlay').click(function(){
        closecontent();
    });
});

// =====================
// 1. USER CLASS (stores login info)
// =====================


console.log("Script loaded successfully");
class Userloggindata {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    savetostorage() {
        const userData = {
            username: this.username,
            email: this.email,
            password: this.password
        };

        localStorage.setItem("userlogindata", JSON.stringify(userData));
    }
}


// =====================
// 2. HERO PAGE WELCOME DISPLAY
// =====================
class Welcomescreen {
    constructor(elementId) {
        this.displayElement = document.getElementById(elementId);
    }

    displayonscreen() {
        const data = localStorage.getItem("userlogindata");
        const message = this.displayElement;

        if (!data || !message) return;

        const userData = JSON.parse(data);

        message.classList.remove("hidden");

        message.innerHTML = `
            <div class="max-w-7xl mx-auto px-10 py-6">
                <h2 class="text-3xl font-semibold text-slate-800">
                    Welcome back, 
                    <span class="text-sky-500 font-bold">${userData.username}</span>
                </h2>
                <p class="text-slate-500 text-sm">
                    We're glad to see you again!
                </p>
            </div>
        `;
    }
}


// =====================
// 3. LOGIN PAGE LOGIC
// =====================
const loginbutton = document.getElementById("loginbtn");

if (loginbutton) {
    loginbutton.addEventListener("click", function () {
        const usernameVal = document.getElementById("username").value;
        const emailVal = document.getElementById("email").value;
        const passwordVal = document.getElementById("password").value;

        if (!usernameVal || !emailVal) {
            alert("Please fill in your details");
            return;
        }

        const newUser = new Userloggindata(
            usernameVal,
            emailVal,
            passwordVal
        );

        newUser.savetostorage();

        window.location.href = "hero.html";
    });
}


// =====================
// 4. HERO PAGE INIT
// =====================
document.addEventListener("DOMContentLoaded", () => {
    const welcome = new Welcomescreen("welcome-display");
    welcome.displayonscreen();
});
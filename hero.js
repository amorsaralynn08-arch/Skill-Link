console.log("hero script running");
console.log("stored data:", localStorage.getItem("userlogindata"));




class Welcomescreen {
    constructor(elementId) {
        this.displayElement = document.getElementById(elementId);
    }

    displayonscreen() {
        const data = localStorage.getItem("userlogindata");

        if (!data || !this.displayElement) return;

        const userData = JSON.parse(data);

        this.displayElement.style.display = "block";

        this.displayElement.innerHTML = `
            <div class="max-w-7xl mx-auto mt-5 mb-5 px-10 py-6">
                <h2 class="text-5xl font-semibold text-slate-800">
                    Welcome back, 
                    <span class="text-sky-500 font-bold">
                        ${userData.username}
                    </span>
                </h2>
                <p class="text-slate-500 text-4xl md:text-2xl">
                    We're glad to see you again!
                </p>
            </div>
        `;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const welcome = new Welcomescreen("welcome-display");
    welcome.displayonscreen();
});





const viewscholarship=document.getElementById('viewscholarships');
const expandedbox = {
viewscholarship: viewscholarship,
}



const viewScholarshipBtn = document.getElementById('viewscholarships');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');

// OPEN
function openpathbox() {
  overlay.classList.remove('hidden');
  overlay.classList.add('flex');

  popup.classList.remove('scale-95', 'opacity-0');
  popup.classList.add('scale-100', 'opacity-100');
}

// CLOSE
function closecontent() {
  popup.classList.add('scale-95', 'opacity-0');

  setTimeout(() => {
    overlay.classList.add('hidden');
    overlay.classList.remove('flex');
  }, 200);
}

// click button
viewScholarshipBtn.addEventListener('click', openpathbox);

// click outside
overlay.addEventListener('click', function (e) {
  if (e.target === overlay) {
    closecontent();
  }
});



document.addEventListener("DOMContentLoaded", function () {

  const storedUser = JSON.parse(localStorage.getItem("userlogindata"));

  const name = storedUser?.username || "there";

  document.getElementById("userName").textContent = name;

});
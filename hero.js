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
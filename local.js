
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



const courses = {
  Engineering: ["Math", "Physics", "English"],
  Medicine: ["Biology", "Chemistry", "English"],
  Business: ["Math", "Economics", "English"],
  IT: ["Programming", "Math", "English"],
  Education: ["Math", "Pedagogy", "English"],
  Arts: ["Art", "History", "English"],
  Science: ["Biology", "Chemistry", "English"],
  Law: ["Legal Studies", "English"],
  Architecture: ["Design", "Math", "English"],
  Design: ["Design", "Math", "English"],
  Humanities: ["History", "Literature", "English"]
};

document.querySelectorAll(".course-btn").forEach(btn => {
  btn.addEventListener("click", () => {

    const course = btn.innerText;
    const subjects = courses[course];

    courseBox.classList.remove("hidden");

    const inputs = subjects.map(sub => `
      <div class="flex flex-col">
        <label class="text-xs text-gray-500 mb-1">${sub}</label>
        <input 
          class="grade-input w-16 px-2 py-1 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300"
          maxlength="2"
          placeholder="A+"
        />
      </div>
    `).join("");

    courseBox.innerHTML = `
      <h3 class="text-lg font-semibold mb-3">${course} Requirements</h3>

      <div class="flex flex-wrap gap-3 items-end">
        ${inputs}
      </div>

      <button class="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full transition">
        Calculate GPA
      </button>

      <div id="results" class="mt-3"></div>
    `;
  });
});
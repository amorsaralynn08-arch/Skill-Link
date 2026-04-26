
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


const courseBox = document.getElementById("courseBox");

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

const gradePoints = {
  "A": 12,
  "A-": 11,
  "B+": 10,
  "B": 9,
  "B-": 8,
  "C+": 7,
  "C": 6,
  "C-": 5,
  "D+": 4,
  "D": 3,
  "D-": 2,
  "E": 1
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
          placeholder="A, B..."
        />
      </div>
    `).join("");

    courseBox.innerHTML = `
      <h3 class="text-lg font-semibold mb-3">${course} Requirements</h3>

      <div class="flex flex-wrap gap-3 items-end">
        ${inputs}
      </div>

      <button class="calc-btn mt-4 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full transition">
        Calculate GPA
      </button>

      <div id="results" class="mt-3"></div>
    `;
  });
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("calc-btn")) {

    const inputs = courseBox.querySelectorAll(".grade-input");

    let total = 0;
    let count = 0;

    inputs.forEach(input => {
      const grade = input.value.toUpperCase().trim();

      if (gradePoints[grade]) {
        total += gradePoints[grade];
        count++;
      }
    });

    const gpa = count ? (total / count).toFixed(2) : "0.00";

    document.getElementById("results").innerHTML = `
      <div class="p-3  rounded-lg mt-3">
        <h4 class="font-semibold">Your GPA: ${gpa}</h4>
      </div>
    `;
  }
});



console.log("Local.js loaded successfully");
let allscholarships = [];

function fetchUniversityData(countryCode) {
$.ajax({
method : 'GET',
url: `https://api.worqnow.ai/education/${countryCode}/universities`,
success: function(data){
    console.log(data);

allscholarships = allscholarships.concat(data.data);},
error: function(error){
    console.log( "error fetching data " , error);}


})
 
}
 fetchUniversityData("au");
 fetchUniversityData("ca");
 fetchUniversityData("de");
 fetchUniversityData("ie");
 fetchUniversityData("nl");

const searchInput = document.getElementById("searchInput");

function searchscholarships() {
  const input = searchInput.value.toLowerCase().trim();
  const resultsdiv = document.getElementById("searchresults");

  if (input === "") {
    resultsdiv.classList.add("hidden");
    resultsdiv.innerHTML = "";
    return;
  }
   if(allscholarships.length === 0) {
    resultsdiv.classList.remove("hidden");
    resultsdiv.innerHTML="<p>Loading scholarships...</p>";
    return;
  }

  const filtered = allscholarships.filter(item =>
  item.name?.toLowerCase().includes(input) ||
  item.city?.toLowerCase().includes(input) ||
  item.region?.toLowerCase().includes(input) ||
  item.code?.toLowerCase().includes(input)
);

  resultsdiv.classList.remove("hidden");
 

  if (filtered.length > 0) {
  resultsdiv.innerHTML = filtered.map(item => `
    <div class="p-3 bg-white rounded-lg shadow-md mb-2">
      <h4 class="font-semibold">${item.name}</h4>
      <p>${item.city}, ${item.region}</p>
      <a href="${item.website}" target="_blank"
       class="text-blue-600 underline hover:text-blue-800">
      Visit University Website →
    </a>

    </div>
  `).join("");
} else {
  resultsdiv.innerHTML = `
    <div class="p-3 bg-white rounded-lg shadow-md mb-2">
      <h4 class="font-semibold">No universities found</h4>
      <p>Try searching something else</p>
    </div>
  `;
}
}

searchInput.addEventListener("input", searchscholarships);

document.getElementById("searchIcon")
  .addEventListener("click", searchscholarships);



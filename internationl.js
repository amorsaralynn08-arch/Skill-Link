let kenyanscholarships = [];

function fetchkenyanUniversityData(uniname) {
$.ajax({
method : 'GET',
url: `http://universities.hipolabs.com/search?country=Kenya&name=${uniname}`,
success: function(data){
    console.log(data);

kenyanscholarships = kenyanscholarships.concat(data);},
error: function(error){
    console.log( "error fetching data " , error);}


})
console.log("loaded successfully");
 
}
fetchkenyanUniversityData("university of nairobi");
fetchkenyanUniversityData("strathmore university");
fetchkenyanUniversityData("kenyatta university");
fetchkenyanUniversityData("jomo kenyatta university of agriculture and technology");
fetchkenyanUniversityData("university of eldoret");
fetchkenyanUniversityData("maseno university");
fetchkenyanUniversityData("university of eastern africa baraton");
fetchkenyanUniversityData("university of kabianga");
fetchkenyanUniversityData("university of meru");
fetchkenyanUniversityData("university of western kenya");
fetchkenyanUniversityData("university of eastern africa, baraton");
fetchkenyanUniversityData("Africa International University");
fetchkenyanUniversityData("Africa Nazarene University");
fetchkenyanUniversityData("Adventist University of Africa");
fetchkenyanUniversityData("Chuka University");
fetchkenyanUniversityData("Catholic University of Eastern Africa");
fetchkenyanUniversityData("Daystar University");
fetchkenyanUniversityData("Dedan Kimathi University of Technology");
fetchkenyanUniversityData("Egerton University");
fetchkenyanUniversityData("Great Lakes University of Kisumu");
fetchkenyanUniversityData("Gretsa Universtiy");
fetchkenyanUniversityData("Inoorero University");
fetchkenyanUniversityData("Jomo Kenyatta University of Agriculture and Technology");
fetchkenyanUniversityData("Jaramogi Oginga Odinga University of Science and Technology");
fetchkenyanUniversityData("Kabarak University");
fetchkenyanUniversityData("University of Kabianga");
fetchkenyanUniversityData("Karatina University");
fetchkenyanUniversityData("Kenya College of Accountancy");
fetchkenyanUniversityData("Kenya Methodist University");
fetchkenyanUniversityData("Kisii University");
fetchkenyanUniversityData("Kenya Medical Training College");
fetchkenyanUniversityData("Kenyatta University");
fetchkenyanUniversityData("Kiriri Womens University of Science and Technology");
fetchkenyanUniversityData("Laikipia University");
fetchkenyanUniversityData("Maseno University");
fetchkenyanUniversityData("Mount Kenya University");
fetchkenyanUniversityData("Maasai Mara University");
fetchkenyanUniversityData("Multimedia University of Kenya");
fetchkenyanUniversityData("Masinde Muliro University of Science and Technology");
fetchkenyanUniversityData("Moi University");
fetchkenyanUniversityData("Meru University of Science and Technology");
fetchkenyanUniversityData("Nairobi Institute of Business Studies");
fetchkenyanUniversityData("Nairobi Technical Training Institute");
fetchkenyanUniversityData("Pan Africa Christian University");
fetchkenyanUniversityData("Pioneer International University");
fetchkenyanUniversityData("Pwani University");
fetchkenyanUniversityData("Presbyterian University of East Africa");
fetchkenyanUniversityData("Riara University School of Business and Law");
fetchkenyanUniversityData("Scott Christian University");
fetchkenyanUniversityData("South Eastern Kenya University");
fetchkenyanUniversityData("St. Pauls University");
fetchkenyanUniversityData("Strathmore University");
fetchkenyanUniversityData("Technical University of Kenya");
fetchkenyanUniversityData("Technical University of Mombasa");
fetchkenyanUniversityData("University of Eastern Africa, Baraton");
fetchkenyanUniversityData("University of Eldoret");
fetchkenyanUniversityData("University of Nairobi");
fetchkenyanUniversityData("United States International University");
fetchkenyanUniversityData("Uzima University College");
fetchkenyanUniversityData("Zetech College")



const searchbar = document.getElementById("searchbar");

function searchkenyancholarships() {
  const input = searchbar.value.toLowerCase().trim();
  const resultsdiv = document.getElementById("resultsdiv");

  if (input === "") {
    resultsdiv.classList.add("hidden");
    resultsdiv.innerHTML = "";
    return;
  }
   if(kenyanscholarships.length === 0) {
    resultsdiv.classList.remove("hidden");
    resultsdiv.innerHTML="<p>Loading scholarships...</p>";
    return;
  }

  const filtered = kenyanscholarships.filter(item =>
  item.name?.toLowerCase().includes(input)
  )

  resultsdiv.classList.remove("hidden");
 

  if (filtered.length > 0) {
  resultsdiv.innerHTML = filtered.map(item => `
    <div class="p-3 bg-white rounded-lg shadow-md mb-2">
      <h4 class="font-semibold">${item.name}</h4>
      
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

searchbar.addEventListener("input", searchkenyancholarships);

document.getElementById("searchIcon")
  .addEventListener("click", searchkenyancholarships);




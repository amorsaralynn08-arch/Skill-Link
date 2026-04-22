// opencontent function
function opencontent(test)
{

const box = document.getElementById('expand_box');
const overlay = document.getElementById('overlay');
box.style.display='block';
overlay.style.display='block';

// what should pop up when the user clicks on thecard
if (test==='SAT')
box.innerHTML=
'<a href="#FAQS_Inner_Container"> <i class="fa-solid fa-x" onclick="closecontent()"></i></a> <h2>Whats really SAT about?!</h2> <p>Full Name: Scholastic Assessment TestPurpose: Measures readiness for college-level workWho needs it: Students applying to undergraduate programs (especially in the US)Sections:ReadingWriting & LanguageMathScoring: 400 – 1600Duration: ~2 hoursValidity: 5 yearsThe SAT in Kenya is a digital, standardized college admission test offered seven times a year (March, May, June, August, October, November, December). Managed by the College Board and facilitated by centers like Learning & Testing Services (LTS) E.A Ltd, the exam cost is roughly KES 19,000, payable via M-PESA. Registration is online, with tests held at authorized schools in Nairobi, Mombasa, and Eldoret.</p>';
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



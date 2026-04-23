
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



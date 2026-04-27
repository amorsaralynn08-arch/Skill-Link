let kenyanscholarships = [];

function fetchkenyanUniversityData(uniname) {
$.ajax({
method : 'GET',
url: `http://universities.hipolabs.com/search?country=Kenya&name=${uniname}`,
success: function(data){
    console.log(data);

kenyanscholarships = kenyanscholarships.concat(data.data);},
error: function(error){
    console.log( "error fetching data " , error);}


})
 
}
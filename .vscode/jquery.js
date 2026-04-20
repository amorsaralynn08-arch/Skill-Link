
 $(document).ready(function(){
     $("#btn").on({
        mouseover:
        function(){
         $(this).css("background-color", "red")},

         mouseout:
         function(){
            $(this).css("background-color" , "sky-blue")},
         
 
         })
        })


function caloriecounter(food){
    $.ajax({
        url : `https://api.calorieninjas.com/v1/nutrition?query=${food}`,
        method : "GET",
        headers : {
          "X-API-Key": "V0ja3xHyr70XZexC9q0Z3A==klQeJqyo45J4trlk",  
    },
    success:function(data){
        const items = data
        console.log(items);
    },
    error:function(error){
        console.log("Error fetching data", error);
    }
    
})}
caloriecounter("")
var $td= $('td')
var xoro= "X"
var clickedBoxes = [];
var XPlacement = [];
var OPlacement = [];

console.log($td)

   
   $td.click(function(){
   

   var tableId = (event.target.id);
    
      if(clickedBoxes.includes(tableId) != true)
    { 
   clickedBoxes.push(tableId);

   console.log(clickedBoxes);

   this.innerHTML = xoro
  
   if(xoro == "X")
   {
   XPlacement.push(tableId)
   xoro = "O"
   }

   else if (xoro == "O")
   {
   OPlacement.push(tableId)
   xoro = "X"
   }

   }


   });

  
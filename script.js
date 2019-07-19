var $td= $('td')
var xoro= "X"
var clickedBoxes = [];
console.log($td)

   
   $td.click(function(){
   

   var tableId = (event.target.id);
    
      if(clickedBoxes.includes(tableId) != true)
    { 
   clickedBoxes.push(tableId);

   console.log(clickedBoxes);
  

   this.innerHTML = xoro

   // alert(tableId + xoro)

   if(xoro == "X")
   {
   xoro = "O"
   }

   else if (xoro == "O")
   {
   xoro = "X"
   }

   }

   });

  
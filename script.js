var $td= $('td')
var xoro= "X"
console.log($td)

   
   $td.click(function(){
   

   var tableId = (event.target.id)
    
   this.innerHTML = xoro

   alert(tableId + xoro)

   if(xoro == "X")
   {
   xoro = "O"
   }

   else if (xoro == "O")
   {
   xoro = "X"
   }
   
   });

  
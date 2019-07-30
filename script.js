var 
 $td= $('td'),
 xoro= "X",
 clickedBoxes = [],
 XPlacement = 0,
 OPlacement = 0,
 xwin1 = [],
 xwin2 = [],
 xwin3 = [],
 xwin4 = [],
 xwin5 = [],
 xwin6 = [],
 xwin7 = [],
 xwin8 = [],
 totalXWins = 0,
 totalOWins = 0;



function reset() {
   for(var i = 0; i <= 8; i++)
   {
   document.getElementById(i).innerHTML = ""
   };
   tableId = [];
   $td.innerHTML = '';
   XPlacement = "";
   OPlacement = "";
   xwin1 = [];
   clickedBoxes = [];
   xoro = "X";
   
}

   $td.click(function(){
      
   var tableId = (event.target.id);
    
      if(clickedBoxes.includes(tableId) != true)
    { 
   clickedBoxes.push(tableId);

   this.innerHTML = xoro;
   
   if(xoro == "X")
   {
   XPlacement = parseInt(tableId);
   OPlacement = "no";
   xoro = "O";

   if(XPlacement < 3)

      {
      xwin1.push(XPlacement);

   }

   if(XPlacement > 2 && XPlacement < 6)

      {
      xwin2.push(XPlacement);

   }

   if(XPlacement > 5)

      {
      xwin3.push(XPlacement);

   }

   if(XPlacement === 0 || XPlacement === 3 || XPlacement === 6)

      {
      xwin4.push(XPlacement);

   }

   if(XPlacement === 1 || XPlacement === 4 || XPlacement === 7)

      {
      xwin5.push(XPlacement);

   }

   if(XPlacement === 2 || XPlacement === 5 || XPlacement === 8)

      {
      xwin6.push(XPlacement);

   }

   if(XPlacement === 0 || XPlacement === 4 || XPlacement === 8)

      {
      xwin7.push(XPlacement);

   }

   if(XPlacement === 2 || XPlacement === 4 || XPlacement === 6)

   {
      xwin8.push(XPlacement);

}

}
   else if (xoro == "O")
   {
   OPlacement = tableId;
   XPlacement = "no";
   xoro = "X";
   }

   function win() {

      if(xwin1.length === 3 || xwin2.length === 3 || xwin3.length === 3 || xwin4.length === 3 || xwin5.length === 3 || xwin6.length === 3 || xwin7.length === 3 || xwin8.length === 3)
      {
         reset();
         alert('Player X wins!');
         totalXWins++;
         document.getElementById("XPoints").innerHTML = totalXWins;

      }
         
      }

   setTimeout(win, 1000) 
   
   
   
}
   });

  
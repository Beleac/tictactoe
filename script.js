var 
 $td= $('td'),
 letterStart= 2,
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
 owin1 = [],
 owin2 = [],
 owin3 = [],
 owin4 = [],
 owin5 = [],
 owin6 = [],
 owin7 = [],
 owin8 = [],
 totalXWins = 0,
 totalOWins = 0;



function reset() {
   for(var i = 0; i <= 8; i++)
   {
   document.getElementById(i).innerHTML = ""
   };
   letterStart++;
   tableId = [];
   $td.innerHTML = '';
   XPlacement = "";
   OPlacement = "";
   clickedBoxes = [];
   if(letterStart%2 === 0)
   {
      xoro = "X"
   }
   
   else
   {
      xoro = "O"
   }
   document.getElementById("turn").innerHTML = `Player ${xoro} Turn`;
   xwin1 = [];
   xwin2 = [];
   xwin3 = [];
   xwin4 = [];
   xwin5 = [];
   xwin6 = [];
   xwin7 = [];
   xwin8 = [];
   owin1 = [];
   owin2 = [];
   owin3 = [];
   owin4 = [];
   owin5 = [];
   owin6 = [];
   owin7 = [];
   owin8 = [];
   
}

function resetScore(){

totalXWins = 0
totalOWins = 0
document.getElementById("OPoints").innerHTML = totalOWins;
document.getElementById("XPoints").innerHTML = totalXWins;

}

   $td.click(function(){
      
   var tableId = (event.target.id);
    
      if(clickedBoxes.includes(tableId) != true)
    { 
   clickedBoxes.push(tableId);

   this.innerHTML = `<span class= ${xoro}>${xoro}</span>`;
   
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
//____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

else if (xoro == "O")
{
OPlacement = parseInt(tableId);
XPlacement = "no";
xoro = "X";

if(OPlacement < 3)

{
owin1.push(OPlacement);

}

if(OPlacement > 2 && OPlacement < 6)

{
owin2.push(OPlacement);

}

if(OPlacement > 5)

{
owin3.push(OPlacement);

}

if(OPlacement === 0 || OPlacement === 3 || OPlacement === 6)

{
owin4.push(OPlacement);

}

if(OPlacement === 1 || OPlacement === 4 || OPlacement === 7)

{
owin5.push(OPlacement);

}

if(OPlacement === 2 || OPlacement === 5 || OPlacement === 8)

{
owin6.push(OPlacement);

}

if(OPlacement === 0 || OPlacement === 4 || OPlacement === 8)

{
owin7.push(OPlacement);

}

if(OPlacement === 2 || OPlacement === 4 || OPlacement === 6)

{
owin8.push(OPlacement);

}

}
document.getElementById("turn").innerHTML = `Player ${xoro} Turn`
   function win() {

      if(xwin1.length === 3 || xwin2.length === 3 || xwin3.length === 3 || xwin4.length === 3 || xwin5.length === 3 || xwin6.length === 3 || xwin7.length === 3 || xwin8.length === 3)
      {
         reset();
         alert('Player X wins!');
         totalXWins++;
         document.getElementById("XPoints").innerHTML = totalXWins;
         
      }

      if(owin1.length === 3 || owin2.length === 3 || owin3.length === 3 || owin4.length === 3 || owin5.length === 3 || owin6.length === 3 || owin7.length === 3 || owin8.length === 3)
      {
         reset();
         alert('Player O wins!');
         totalOWins++;
         document.getElementById("OPoints").innerHTML = totalOWins;

      }
         
      }

   setTimeout(() => {
      win();
   }, 1000) 
   
   
   
}
   });

  
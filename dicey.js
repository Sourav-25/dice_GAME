var x=Math.floor(Math.random()*6)+1;
console.log(x);
var randomimage="dice-"+x+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimage);
var y=Math.floor(Math.random()*6)+1;
console.log(y);
var randomimage2="dice-"+y+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimage2);
var heading=document.getElementById("heading1");
if(x>y)
heading.innerText="Player 1 Wins";
else if(y>x)
heading.innerText="Player 2 Wins";
else
heading.innerText="TIE";

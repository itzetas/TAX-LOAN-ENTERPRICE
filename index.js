let bre = document.getElementById("BRi").value;
   bre = alert("All loan should be repaid within 6 month with a 6.2% intrest, procced if intrested")
 

 let inter = document.getElementById("gal").value;
  inter = alert("your payment for each month is" + " " )
  

  
start = document.getElementById(amount)


function makeLoan(){
 let start = prompt("fill the amount you want to deposit")
let etas = parseFloat(start)
let damian = (etas * 0.062)
let anoda = (damian * 6)
let further = (anoda + etas)
let klaus = (further/6)
alert ("the money you are meant to deposit in a month is" + " " + anoda)
alert ("each month you are expected to pay" + " " + klaus)
console.log(further)
};

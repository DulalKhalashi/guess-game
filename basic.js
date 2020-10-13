 
 var win=0;
 var lost=0;

 for(var i=1; i<=5; i++)
 {
     var guess=parseInt(prompt("Enter your guess number from 1 to 5 :"));
     var random=Math.floor(Math.random()*5)+1;

     if(guess==random)
     {
         document.write("You are won <br>");
         win++;
     }
     else
     {
         document.write("you are losser the random number is : "+random+"<br>");
         lost++;
     }
 }

 document.write("total win"+win+ "<br>");
 document.write("total lost"+lost+ "<br>");
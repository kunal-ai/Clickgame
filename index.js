document.getElementById("butn").innerHTML = "Hit Me";

  var press=0;
  var timeOver = false;
  function hi(){
               if  (!timeOver)  {
               press+=1;
               document.getElementById("score").innerHTML = press;

  }

  }
              var countD = 10;
              var countDn = setInterval (function()
                        {
              countD--;
              document.getElementById("timer").innerHTML = countD;
              if(countD==0)
                          {
              clearInterval(countDn);
              document.getElementById("timer").innerHTML = "Time Over!";
              timeOver = true;
                              }
              }, 1000);

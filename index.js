

// For first Dice
var randomNumber1=Math.floor(Math.random()*7);
    if(randomNumber1 == 0)
    {
        randomNumber1++;
    }
   
      var randomImage1="images/dice"+randomNumber1+".png";
    document.getElementById("firstImage").setAttribute("src", randomImage1); 

    // For Second Dice
    var randomNumber2=Math.floor(Math.random()*7);
    if(randomNumber2 == 0)
    {
        randomNumber2++;
    }
    

      var randomImage2="images/dice"+randomNumber2+".png";
    document.getElementById("secondImage").setAttribute("src", randomImage2); 



    //Showing the Winner
    var result;
    if(randomNumber1 > randomNumber2)
    {
        result="Player 1 Wins!"
    }
    else
        if(randomNumber1<randomNumber2)
        {
            result="Player 2 Wins!";

        }
        else if(randomNumber1 == randomNumber2)
                {
                    result="Draw!"

                }
    document.querySelector("h1").innerHTML= result;

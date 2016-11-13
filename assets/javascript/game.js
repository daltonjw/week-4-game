  
var wins = 0;
var losses = 0;

playGame();
  
  function playGame(){ 
    var targetNumber = Math.floor((Math.random()*103)+18);

    $("#numberToGuess").text(targetNumber);

    var counter = 0;

    $("#winsDisplay").text(wins);
    $("#lossesDisplay").text(losses);
    $("#totalScoreDisplay").text(counter);
     
      // Now for the hard part. Creating multiple crystals each with their own unique number value.

      // We begin by expanding our array to include four options.
      var numberOptions = [Math.floor((Math.random()*12)+1),
                          Math.floor((Math.random()*12)+1),
                          Math.floor((Math.random()*12)+1),
                          Math.floor((Math.random()*12)+1)];

      // Next we create a for loop to create crystals for every numberOption.
      for (var i = 0; i < numberOptions.length; i++) {

        // For each iteration, we will create an imageCrystal
        var imageCrystal = $("<img>");

        // First each crystal will be given the class ".crystalImage".
        // This will allow the CSS to take effect.
        imageCrystal.addClass("crystalImage");

        // Each imageCrystal will be given a src link to the crystal image
        imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

        // Each imageCrystal will be given a data attribute called data-crystalValue.
        // This data attribute will be set equal to the array value.
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);

        // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
        $("#crystals").append(imageCrystal);
      }     
      
      // This time, our click event applies to every single crystal on the page. Not just one.

      $(".crystalImage").on("click", function() {

        // Determining the crystal's value requires us to extract the value from the data attribute.
        // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
        // Using the .data("crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
        // (It automatically strips the "data-" part).
        var crystalValue = ($(this).data("crystalvalue"));

        // We then add the crystalValue to the user's "counter" which is a global variable.
        // Every click, from every crystal adds to the global counter.
        counter += crystalValue;

        // All of the same game win-lose logic applies. So the rest remains unchanged.
        // alert("New score: " + counter);
        $("#totalScoreDisplay").text(counter);

        if (counter === targetNumber) {
          alert("You win! Click OK to play again.");
          $("#crystals").empty();
          wins++;
          playGame();
        }

        else if (counter >= targetNumber) {
          alert("You lose!! Click ok to play again");
          $("#crystals").empty();
          losses++;
          playGame();
        }

      });
  };  
$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    
     // New button for the pet to take a nap
    $('.nap-button').click(clickedNapButton);

    // jQuery Method #1: .hide()
    // Hides the pet's comment when the page first loads
    $('.pet-comment').hide();

  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Godzilla", weight:12, happiness:8};
  
    function clickedTreatButton() {
      pet_info.happiness += 2;
      pet_info.weight += 1;
      checkAndUpdatePetInfoInHtml();
     showPetMessage("RAWR! Thanks for the treat!");
    }
    
    function clickedPlayButton() {
      pet_info.happiness += 3;
      pet_info.weight -= 1;
      checkAndUpdatePetInfoInHtml();
      showPetMessage("ROAR! Let's destroy some buildings!");
    }
    
    function clickedExerciseButton() {
      pet_info.happiness -= 2;
      pet_info.weight -= 2;
      checkAndUpdatePetInfoInHtml();
      showPetMessage("All that stomping made me tired!");
    }

    function clickedNapButton() {
      pet_info.happiness += 4;
      checkAndUpdatePetInfoInHtml();
      showPetMessage("Even the King of Monsters needs a nap!");

}
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      if (pet_info.weight < 0) {
      pet_info.weight = 0;
    }

      if (pet_info.happiness < 0) {
      pet_info.happiness = 0;
    }

    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
    }

    function showPetMessage(message) {
       // .hide() is a jQuery method that hides an element on the page.
      // I'm using it to hide the pet's old message before updating it.
      $('.pet-comment').hide();
      // Changes the message based on what button was clicked
      $('.pet-comment').text(message);
      // .show() is a jQuery method that makes a hidden element appear again.
      // I'm using it to display the new message after the pet does an activity.
      $('.pet-comment').show();

    }
  
var playerName = window.prompt ("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10; 

var enemyNames = [ "Roborto", "Amy Android", "Robo Trumble"]; 
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[2]);


//----------------------------------------------------------------------------------------------------------------------------------------------

var fight = function(enemyName) {

  // ask player if they'd like to fight or run
  var promptFight = window.prompt(
    'Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'
  );

  while (playerHealth > 0 && enemyHealth > 0) {

     if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName+
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now has " +
        playerHealth +
        " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }

//--------------------------------------------------------------------------------------------------------------------------------------------
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
      fight();
    }
    // if player did not chose 1 or 2 in prompt
  } else {
    window.alert("You need to pick a valid option. Try again!");
  }

}
}; // end of fight function


//--------------------------------------------------------------------------------------------------------------------------------------------
   

// if player choses to skip
   if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
    
      playerMoney = playerMoney - 2;
    }
 
    else {
      fight();
    }
   }
   else {
    window.alert("You need to pick a valid option. Try again!"); 
     else {
    window.alert("You have lost your robot in battl! Game over!");
  }
}; // end of fight function

//---------------------------------------------------------------------------------------------------------------------------------------------

// run fight function to start game

for(var i = 0; i < enemyNames.length; i++)  {
    if (playerHealth > 0) {
  window.alert("Welcome to Robot Gladiators! Round " + (i + 1)) } ;
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
       debugger;
  fight(pickedEnemyName);
}


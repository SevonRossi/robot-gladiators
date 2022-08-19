var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = randomNumber(40,60);
var enemyAttack = 12;

var randomNumber = function(){
  var value = Math.floor(math.random() * (max - min + 1 )) + min;

  return value;

}

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);
console.log(Math.PI);


var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    if (promptFight === "skip" || promptFight === "SKIP") {
   
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
   
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney", playerMoney);
        break;
      }
    }
    Var damage = randomNumber(playerAttack - 3, playerAttack);

    enemyHealth = Math.max(0, enemyHealth - playerAttack);
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

   
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');
      playerMoney = playerMoney + 20;
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }
    var damage = randomNumber(enemyAttack -3, enemyAttack);

    playerHealth = Math.max(0, playerHealth - enemyAttack);
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
     
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  } 
}; 

for (var i = 0; i < enemyNames.length; i++) {
  if (playerHealth > 0) {
    window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

    var pickedEnemyName = enemyNames[i];
    enemyHealth = Math.floor(Math.random() * 21) + 40;

    fight(pickedEnemyName);
  }
  else {
    window.alert('You have lost your robot in battle! Game Over!');
    break;
  }
}

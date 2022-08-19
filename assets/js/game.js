var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,

  refillHealth: function() {
  if (this.money >= 7) {
    window.alert("Refilling player's health by 20 for 7 dollars.");
    this.health += 20;
    this.money -= 7;
  } 
  else {
    window.alert("You don't have enough money!");
  }
},
upgradeAttack: function() {
  if (this.money >= 7) {
    window.alert("Upgrading player's attack by 6 for 7 dollars.");
    this.attack += 6;
    this.money -= 7;
  } 
  else {
    window.alert("You don't have enough money!");
  }
}
}

pickedEnemyObj.health = randomNumber(40, 60);

var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Andriod",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  },
];


var randomNumber = function(){
  var value = Math.floor(math.random() * (max - min + 1 )) + min;

  return value;

}

console.log(enemyNames);
console.log(enemyInfo.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);
console.log(Math.PI);




var fight = function(enemy) 
    
    

{
  while (playerInfo.health > 0 && enemy.health > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    if (promptFight === "skip" || promptFight === "SKIP") {
   
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      if (confirmSkip) {
        window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
   
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerInfo.money", playerInfo.money);
        break;
      }
    }
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - playerInfo.attack);
    console.log(
+ ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
    );

   
    if (enemy.health <= 0) {
      window.alert(enemy.name + ' has died!');
      playerInfo.money = playerInfo.money + 20;
      break;
    } else {
      window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
    }
    var damage = randomNumber(enemy.attack -3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - enemy.attack);
    console.log(
      enemy.name + ' attacked '+ '. '+ ' now has ' + playerInfo.health + ' health remaining.'
    );

    if (playerInfo.health <= 0) {
      window.alert (playerInfo.name+ ' has died!');
      break;
    } else (
      window.alert + ' still has ' + playerInfo.health + ' health left.'
    )
  }
  }; 
var startGame = function () {

  playerInfo.reset();
for (var i = 0; i < enemyInfo.length; i++) {
  if (playerInfo.health > 0) {
    window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

    var pickedEnemyObj = enemyInfo[i];
   pickedEnemyObj.health = randomNumber(40, 60);
  
      fight(pickedEnemyObj);
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) 
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
      

        if (storeConfirm) {
          shop();
        }
  }

  else {
    window.alert('You have lost your robot in battle! Game Over!');
    break;
  }
}
endGame();
};


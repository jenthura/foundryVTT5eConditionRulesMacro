/* Collaborators: Jenthura, u/ccjmk, u/Freeeze014
 * This will create a dialog window with buttons for each 5e Condition ruling
 * you can select a condition and see a printout to the chat with an image
*/

function postToChat(conditionName, imgURL, message){ //this function takes the name of the Condition, a corresponding image URL and the message for said Condition and posts all three to the chat in a nice card
  let chatData = { //create the chat object with a Conditions alias and variable content
    user: game.user._id,
    speaker: {alias: "Conditions"},
    content: `<div class="dnd5e chat-card" style="text-align: center"><header class="card-header flexrow"><h3 class="item-name">${conditionName}</h3></div><br><div style="text-align: center">`
  };
  if (imgURL != ``){ //append the image and message
    chatData.content += `<img width=75% height=50% src="${imgURL}"</img></div><br>${message}`
  } else { //if there is no imgURL, then just show the message, currently only used for Incapacitated.
    chatData.content += `<br>${message}`
  }
ChatMessage.create(chatData, {}); //given all the data, print the message to chat
};
let d = new Dialog({ //dialog object creates the window with all the buttons
title: "Conditions",
buttons: {
one: {
 label: "👁<br>Blinded",
 callback: () => {postToChat(`Blinded`,`https://s3.amazonaws.com/files.d20.io/images/55559719/M0zOG1K8oYu2lirzBh7rYQ/med.png?1528351640`, `A blinded creature can't see and automatically fails any ability check that requires sight.<br>Attack rolls against the creature have advantage and the creature's attack rolls have disadvantage.`)}
},
two: {
  label: "💞<br>Charmed",
  callback: () => {postToChat(`Charmed`, `https://s3.amazonaws.com/files.d20.io/images/55559726/G3D2EHHgsNBqT2ZN0_NTEQ/med.png?1528351662`, `A charmed creature can't attack the charmer or target the charmer with harmful abilities or magical effects.<br> The charmer has advantage on any ability check to interact socially with the creature.`)}
 },
 three: {
  label: "🔇<br>Deafened",
  callback: () => {postToChat(`Deafened`, `https://s3.amazonaws.com/files.d20.io/images/55559745/wlCawVD0RSr2LLmxOvvG5Q/med.png?1528351695`, `A deafened creature can't hear and automatically fails any ability check that requires hearing.`)}
 },
four: {
  label: "💤<br>Exhaustion",
  callback: () => {postToChat(`Exhaustion`, `https://i.imgur.com/YTBZgTw.png`, `An effect can give a creature one or more levels of exhaustion as specified in the effect's description.<br><i>1-Disadvantage on ability checks</i><br><i>2-Speed halved</i><br><i>3-Disadvantage on attack rolls and saving throws</i><br><i>4-Hit point maximum halved</i><br><i>5-Speed reduced to 0</i><br><i>6-Death</i><br> If an already exhausted creature suffers another effect that causes exhaustion its current level of exhaustion increases by the amount specified in the effect's description.<br> A creature suffers the effect of its current level of exhaustion as well as all lower levels. For example a creature suffering level 2 exhaustion has its speed halved and has disadvantage on ability checks.<br> An effect that removes exhaustion reduces its level as specified in the effect's description with all exhaustion effects ending if a creature's exhaustion level is reduced below 1.<br> Finishing a long rest reduces a creature's exhaustion level by 1 provided that the creature has also ingested some food and drink. Also being raised from the dead reduces a creature’s exhaustion level by 1.`)}
 },
five: {
  label: "😨<br>Frightened",
  callback: () => {postToChat(`Frightened`, `https://s3.amazonaws.com/files.d20.io/images/55559774/mVza6mErtSNLGfnDvF1QNA/med.png?1528351758`, `A frightened creature has disadvantage on ability checks and attack rolls while the source of its fear is within line of sight.<br>The creature can't willingly move closer to the source of its fear.`)}
 },
six: {
  label: "🔒<br>Grappled",
  callback: () => {postToChat(`Grappled`, `https://s3.amazonaws.com/files.d20.io/images/55559802/C8qd1DrhYPTnMbrkp_HV4g/med.png?1528351822`, `A grappled creature’s speed becomes 0, and it can’t benefit from any bonus to its speed.<br>The condition ends if the Grappler is incapacitated.<br>The condition also ends if an Effect removes the grappled creature from the reach of the Grappler or Grappling Effect, such as when a creature is hurled away by the thunder­wave spell.<br>Moving a Grappled Creature. When you move you can drag or carry the grappled creature with you but your speed is halved unless the creature is two or more sizes smaller than you.`)}
 },
seven: {
  label: "🚫<br>Incapacitated",
  callback: () => {postToChat(`Incapacitated`, ``, `An incapacitated creature can't take actions or reactions.`)}
 },
eight: { 
  label: "👻<br>Invisible",
  callback: () => {postToChat(`Invisible`, `https://s3.amazonaws.com/files.d20.io/images/55559846/cU6tX13w3aFAjFeQYjJH4A/med.png?1528351901`, `An invisible creature is impossible to see without the aid of magic or a special sense. For the purpose of hiding, the creature is heavily obscured. The creature's location can be detected by any noise it makes or any tracks it leaves.<br>Attack rolls against the creature have disadvantage, and the creature's attack rolls have advantage.`)}
 },
nine: {
  label: "👨‍🦽<br>Paralyzed",
  callback: () => {postToChat(`Paralyzed`, `https://s3.amazonaws.com/files.d20.io/images/55559859/iUqwp1Nm_FqpxyCUbAhJCg/med.png?1528351931`, `A paralyzed creature is incapacitated (Check that rule) and can't move or speak.<br>The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage.<br>Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.`)}
 },
ten: {
  label: "😑<br>Petrified",
  callback: () => {postToChat(`Petrified`, `https://s3.amazonaws.com/files.d20.io/images/55559865/HP_qIlp2sw6yK6sJvepEzw/med.png?1528351950`, `A petrified creature is transformed along with any nonmagical object it is wearing or carrying into a solid inanimate substance (usually stone). Its weight increases by a factor of ten and it ceases aging.<br>The creature is incapacitated (check that rule) can't move or speak and is unaware of its surroundings.<br>Attack rolls against the creature have advantage.<br>The creature automatically fails Strength and Dexterity saving throws.<br>The creature has resistance to all damage.<br>The creature is immune to poison and disease although a poison or disease already in its system is suspended not neutralized.`)}
 },
eleven: {
  label: "🐍<br>Poisoned",
  callback: () => {postToChat(`Poisoned`, `https://s3.amazonaws.com/files.d20.io/images/55559874/XTkBXciYb4qBpHS0vkAQUA/med.png?1528351968`, `A poisoned creature has disadvantage on attack rolls and ability checks.`)}
 },
twelve: {
  label: "🛌<br>Prone",
  callback: () => {postToChat(`Prone`, `https://s3.amazonaws.com/files.d20.io/images/55559883/rGGD5WabxIUsQa2jREglow/med.png?1528351995`, `A prone creature's only movement option is to crawl unless it stands up and thereby ends the condition.<br>The creature has disadvantage on attack rolls.<br>An attack roll against the creature has advantage if the attacker is within 5 feet of the creature. Otherwise the attack roll has disadvantage.<br>You can drop prone without using any of your speed. Standing up takes more effort doing so costs an amount of movement equal to half your speed. For example if your speed is 30 feet you must spend 15 feet of movement to stand up. You can't stand up if you don't have enough movement left or if your speed is 0.<br>To move while prone you must crawl or use magic such as teleportation. Every foot of movement while crawling costs 1 extra foot. Crawling 1 foot in difficult terrain therefore costs 3 feet of movement.`)}
 },
thirteen: {
  label: "🕸<br>Restrained",
  callback: () => {postToChat(`Restrained`, `https://s3.amazonaws.com/files.d20.io/images/55559904/mfyAH2l0Y7nDgk3gXdijQQ/med.png?1528352037`, `A restrained creature's speed becomes 0 and it can't benefit from any bonus to its speed.<br>Attack rolls against the creature have advantage and the creature's attack rolls have disadvantage.<br>The creature has disadvantage on Dexterity saving throws.`)}
 },
fourteen: {
  label: "💫<br>Stunned",
  callback: () => {postToChat(`Stunned`, `https://s3.amazonaws.com/files.d20.io/images/55559922/0-xqSluttXlVB6ANk3pwhQ/med.png?1528352065`, `A stunned creature is incapacitated, can't move and can speak only falteringly.<br>The creature automatically fails Strength and Dexterity saving throws.<br>Attack rolls against the creature have advantage.<br>An incapacitated creature can't take actions or reactions.`)}
 },
fifteen: {
  label: "😵<br>Unconscious",
  callback: () => {postToChat(`Unconscious`, `https://s3.amazonaws.com/files.d20.io/images/55559936/3DEXMpEJnv0F7X1mRVsDPQ/med.png?1528352098`, `An unconscious creature is incapacitated can't move or speak and is unaware of its surroundings.<br>The creature drops whatever it's holding and falls prone.<br>The creature automatically fails Strength and Dexterity saving throws.<br>Attack rolls against the creature have advantage.<br>Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.`)}
 }
},
default: "one",
render: html => console.log("Register interactivity in the rendered dialog"),
close: html => console.log("This always is logged no matter which option is chosen")
});
d.render(true);
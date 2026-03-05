function generateTip(){

const tips = [
"Study in short sessions instead of long ones.",
"Use flashcards to remember key terms.",
"Teach someone else what you learned.",
"Take breaks every 25 minutes.",
"Practice past exam questions.",
"Keep your study area clean and organized."
];

let randomTip = tips[Math.floor(Math.random() * tips.length)];

document.getElementById("tip").innerText = randomTip;

}
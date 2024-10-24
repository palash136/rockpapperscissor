const option = document.querySelectorAll('.option');
const middlesection = document.getElementById('middlesection');
const bottomsection = document.getElementById('bottomsection');
const contentbox = document.querySelector('.box');
const iconbtn = document.querySelector('.icon-btn');
const rulebtn = document.querySelector('.rule-btn');
const nxtbtn = document.querySelector('.nxt-btn');

let cpoption;
let userchoice;
let yourscore = 0;
let computerscore = 0;

const playagain = document.getElementById('playagain');
const showresult = document.getElementById('showresult');
showresult.style.display = 'none';

const userchoiceoption = {
    rock: "./rock.svg",
    papper: "./papper.svg",
    scissor: "./scissor.svg"
};

option.forEach((x) => {
    x.addEventListener('click', (e) => {
        userchoice = e.target.id;
        choice();
    });
});

const choice = () => {
    middlesection.style.display = 'none';
    bottomsection.style.display = 'flex';
    
    document.getElementById("userpicked").src = userchoiceoption[userchoice];
    computerchoice();
    result(userchoice, cpoption);
};

const computerchoice = () => {
    const computeroption = ['rock', 'papper', 'scissor'];
    cpoption = computeroption[Math.floor(Math.random() * computeroption.length)];
    document.getElementById('computerpicked').src = userchoiceoption[cpoption];
};

const result = (choice, cpoption) => {
    if (choice === "papper" && cpoption === "rock") {
        decission('YOU win');
        userscore(++yourscore); // Increment directly
    } else if (choice === "papper" && cpoption === "scissor") {
        decission('YOU lose');
        cpuscore(++computerscore); // Increment directly
    } else if (choice === "scissor" && cpoption === "papper") {
        decission('YOU win');
        userscore(++yourscore); // Increment directly
    } else if (choice === "rock" && cpoption === "papper") {
        decission('YOU lose');
        cpuscore(++computerscore); // Increment directly
    } else if (choice === "papper" && cpoption === "papper") {
        decission('Match tie');
    } else if (choice === "rock" && cpoption === "rock") {
        decission('Match tie');
    } else if (choice === "rock" && cpoption === "scissor") {
        decission('YOU win');
        userscore(++yourscore); // Increment directly
    } else if (choice === "scissor" && cpoption === "rock") {
        decission('YOU lose');
        cpuscore(++computerscore); // Increment directly
    } else if (choice === "scissor" && cpoption === "papper") {
        decission('YOU win');
        userscore(++yourscore); // Increment directly
    } else if (choice === "scissor" && cpoption === "scissor") {
        decission('Match tie');
    }
};

const decission = (decision) => {
    document.querySelector('.result h1').innerText = decision;
};

playagain.addEventListener('click', () => {
    middlesection.style.display = 'flex';
    bottomsection.style.display = 'none';
});

const userscore = (uscore) => {
    yourscore = uscore; // Update yourscore variable
    document.getElementById("userscore").innerText = yourscore; // Update score display
};

const cpuscore = (cscore) => {
    computerscore = cscore; // Update computerscore variable
    document.getElementById("computerscore").innerText = computerscore; // Update score display
};

contentbox.style.display = 'none';

rulebtn.onclick = () => {
    contentbox.style.display = 'block';
};

iconbtn.onclick = () => {
    contentbox.style.display = 'none';
};

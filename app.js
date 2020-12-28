let userscore = 0;
let computerscore = 0;
const userscore_span = document.getElementById("user-score");
const computerscore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getcomputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomnumber = Math.floor(Math.random() * 3);
    return choices[randomnumber];
}

function convertTOword(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";

}

function win(userChoice, computerChoice) {
    userscore++
    userscore_span.innerHTML = userscore;
    computerscore_span.innerHTML = computerscore;
    const Smalluserword = "user".fontsize(3).sup();
    const Smallcompword = "comp".fontsize(3).sup();
    const userchoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertTOword(userChoice)}${Smalluserword} beats  ${convertTOword(computerChoice)}${Smallcompword}. You WIN! \u{1F947}`;
    userchoice_div.classList.add('green-glow');
    setTimeout(() => userchoice_div.classList.remove('green-glow'), 500);

}


function lose(userChoice, computerChoice) {
    computerscore++;
    userscore.innerHTML = userscore;
    computerscore_span.innerHTML = computerscore;
    const Smalluserword = "user".fontsize(3).sup();
    const Smallcompword = "comp".fontsize(3).sup();
    const userchoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertTOword(userChoice)}${Smalluserword} loses to ${convertTOword(computerChoice)}${Smallcompword}. You LOST... \u{1F627}`;
    userchoice_div.classList.add('red-glow');
    setTimeout(() => userchoice_div.classList.remove('red-glow'), 500);
}

function draw(userChoice, computerChoice) {
    const Smalluserword = "user".fontsize(3).sup();
    const Smallcompword = "comp".fontsize(3).sup();
    const userchoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertTOword(userChoice)}${Smalluserword} equals  ${convertTOword(computerChoice)}${Smallcompword}. The game is Drawn! \u{2693}`;
    userchoice_div.classList.add('gray-glow');
    setTimeout(() => userchoice_div.classList.remove('gray-glow'), 500);
}

function game(userChoice) {
    const computerChoice = getcomputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;

        case "ps":
        case "rp":
        case "sr":
            lose(userChoice, computerChoice);
            break;

        case "pp":
        case "rr":
        case "ss":
            draw(userChoice, computerChoice);
            break;

    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}


main();
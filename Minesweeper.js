
function button() {
    this.checked = false;
    this.flaggged = false;
    this.mine = false;
    this.adjacentMines = 0;
    this.getMine = function () { return this.mine };

}

var btn = [];

let seconds=0;
let mines=12;
let flagsPlaced=0;
let buttonsClicked = 0;



function addAdjacentMines(rand) {

    if ((rand + 1) % 10 != 0) {

        if (rand < 99) {
            btn[rand + 1].adjacentMines++;
        }

        if (rand >= 9) {
            btn[rand - 9].adjacentMines++;
        }

        if (rand < 89) {
            btn[rand + 11].adjacentMines++;
        }
    }
    if (rand % 10 != 0) {

        if (rand < 91) {
            btn[rand + 9].adjacentMines++;
        }

        if (rand > 0) {
            btn[rand - 1].adjacentMines++;
        }


        if (rand >= 11) {
            btn[rand - 11].adjacentMines++;
        }
    }
    if (rand < 90) {
        btn[rand + 10].adjacentMines++;
    }
    if (rand >= 10) {
        btn[rand - 10].adjacentMines++;
    }
}

//checks the id of the button to seee if its a mine. The function then outputs the number of 
//mines adjacent as well as changing the class of the button so the color changes.
function checkForMine() {

    if (document.getElementById("flagBtn").className == "flag-off") {

        if (this.className != "clicked-btn") {
            if (this.id == "mine") {
                this.innerText = "mine";
                alert("you lose");
            } else if (this.id == "") {
                this.innerText = "";
                buttonsClicked++;
            } else {
                this.innerText = this.id;
                buttonsClicked++;
            }

            if (buttonsClicked == 88) {
                alert("congratulations you found all the mines!");
            }
            this.className = "clicked-btn";
        }
    } else if (this.className == "flagged-btn") {

        this.className = "btn";
        flagsPlaced--;
        document.getElementById("remainingMines").innerText="Mines: "+(mines-flagsPlaced);
    } else if (this.className != "clicked-btn") {
        this.className = "flagged-btn";
        flagsPlaced++;
        document.getElementById("remainingMines").innerText="Mines: "+(mines-flagsPlaced);
    }

}

//switches the status of the flagger to on or off
function switchFlag() {
    if (this.className == "flag-off") {
        this.className = "flag-on";
        this.innerText = "flag:on"
    } else {
        this.className = "flag-off";
        this.innerText = "flag:off"
    }
}

//function to run the timer
function updateTimer(){
    seconds++;
    document.getElementById("timer").innerText="Time:"+seconds;
}
//--------------------------------------------------------------------------\\
//main function that initializes the game
function createGame() {
    setInterval(updateTimer,1000);
    document.getElementById("remainingMines").innerText="Mines: "+(mines-flagsPlaced);

    //initialize an array of button objects that represent the buttons in the game
    for (let i = 0; i < 100; i++) {
        btn[i] = new button;
    }

    //add mines to the button objects
    for (let i = 0; i < mines; i++) {
        let rand = Math.floor(Math.random() * 100);

        if (btn[rand].mine == false) {
            btn[rand].mine = true;
            addAdjacentMines(rand);
        } else {
            i--;
        }
    }
    //add an event listener to the flgger button 
    document.getElementById("flagBtn").addEventListener("click", switchFlag, false);

    //adds an event listener to each button in the game. The event listener calls a function that will check to see if the button is a mine. 
    for (let i = 0; i < 20; i += 2) {

        for (let j = 1; j < 20; j += 2) {

            document.getElementById('table').childNodes[1].childNodes[i].childNodes[j].firstChild.addEventListener("click",
                checkForMine, false);


            //adds an id to the buttons that tell if the button is a mine or how many mines are adjacent to the button.
            if (btn[((i / 2) * 10 + ((j - 1) / 2))].mine == true) {
                document.getElementById('table').childNodes[1].childNodes[i].childNodes[j].firstChild.id = "mine";
            } else if (btn[((i / 2) * 10 + ((j - 1) / 2))].adjacentMines != 0) {
                document.getElementById('table').childNodes[1].childNodes[i].childNodes[j].firstChild.id = "" + btn[(i / 2) * 10 + ((j - 1) / 2)].adjacentMines;
            } else {
                document.getElementById('table').childNodes[1].childNodes[i].childNodes[j].firstChild.id = "";
            }

        }
    }


}

function autoClear(element) {
    console.log(element.parentNode);
}


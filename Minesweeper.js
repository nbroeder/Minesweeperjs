
 function createGame(){
     document.getElementById('label').innerText="game had begun";
    function button(){
        this.checked=false;
        this.flaggged=false;
        this.mine=false;
        this.adjacentMines=0;
    }
    const btn=[];
    for(let i=0; i<100;i++){
        btn[i]=new button;
    }

    for (let i =0;i<5;i++){
        let rand=Math.floor(Math.random()*10);
        if(btn[rand].mine==false){
            btn[rand].mine=true;
        }else{
            i--;
        }
    }
    
    //Will add an event listener to each button in the game. The event listener calls a function that will check to see if the button is a mine. 
    for (let i=0;i<20;i+=2){
       
        for (let j=1;j<20;j+=2){
            document.getElementById('table').childNodes[1].childNodes[i].childNodes[j].firstChild.addEventListener('click',checkForMine(((i/2)*10+((j-1)/2))));
            
        }
    }

 }



function checkForMine(i){
    console.log(i);
    /*if(btn[i].mine==false){
        document.getElementById('label').innerHTML='pressed';
     }else{
         document.getElementById('label').innerHTML='Mine';
     }*/

}
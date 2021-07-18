
 function button(){
    this.checked=false;
    this.flaggged=false;
    this.mine=false;
    this.adjacentMines=0;
    this.getMine = function() {return this.mine};
    
}

var btn=[];


for(let i=0; i<100;i++){
    btn[i]=new button;
}



for (let i =0;i<30;i++){
    let rand=Math.floor(Math.random()*100);
    
    if(btn[rand].mine==false){
        btn[rand].mine=true;
    }else{
        i--;
    }
}
 
 function createGame(){
    //adds an event listener to each button in the game. The event listener calls a function that will check to see if the button is a mine. 
    for (let i=0;i<20;i+=2){
       
        for (let j=1;j<20;j+=2){
            
          document.getElementById('table').childNodes[1].childNodes[i].childNodes[j].firstChild.addEventListener("click",
            checkForMine,false);
            
            console.log(btn[((i/2)*10+((j-1)/2))].mine);
            if(btn[((i/2)*10+((j-1)/2))].mine==true){
                document.getElementById('table').childNodes[1].childNodes[i].childNodes[j].firstChild.id="mine";
            }else if(btn[((i/2)*10+((j-1)/2))].adjacentMines!=0){
                document.getElementById('table').childNodes[1].childNodes[i].childNodes[j].firstChild.id=""+btn[(i/2)*10+((j-1)/2)].adjacentMines;
            }else{
                document.getElementById('table').childNodes[1].childNodes[i].childNodes[j].firstChild.id="";
            }
            

           
            
            
        }
    }
    

 }

 


function checkForMine(i,j){
    
    
    if(this.id=="mine"){
        this.innerText="mine";
    }else if(this.id==""){
        this.innerText="";
    }else{
        this.innerText=this.id;
    }
   
}

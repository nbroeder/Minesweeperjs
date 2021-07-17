function button(){
    this.checked=false;
    this.flaggged=false;
    this.mine=false;
    this.adjacentMines=0;
}

// function createGame(size){
//     const btn=[];
//     for(let i=0; i<size*size;i++){
//         btn[i]=new button;
//     }

//     let table=document.createElement('table');
//     let row=document.createElement('tr')
//     table.id="table";
//     row.innerHTML='<button>button</button>'
//     table.appendChild(row);
//     table.appendChild(row);
//     table.appendChild(row);
//     table.appendChild(row);
//     table.appendChild(row);
// }

function createGame(){
   
    document.getElementById(btn).onclick="clicked";
}
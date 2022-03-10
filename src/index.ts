type car ={
    id:number;
    marca:string;
    modello:string;
}

var allcar : car[];
var i : number;
i=0;
allcar = [
    {id:1,marca:"ford",modello:"mustang"},
    {id:2,marca:"suzuki",modello:"hybrid"},
    {id:3,marca:"fiat",modello:"punto"},
    {id:4,marca:"alfaromeo",modello:"giulietta"},
    {id:5,marca:"citroen",modello:"c4"}
];

function delay(ms:number){
return new Promise(resolve=>setTimeout(resolve,ms));
}
function inizio(){
    
    console.log("preparo le macchine");
    
}
function fine(){
   
    console.log("fine dele macchine");
    
}

async function delayex() {
   inizio();
    for( i=0;i<allcar.length;i++){
      
        await delay(5000);
        console.log("id "+allcar[i].id);
        console.log("marca"+allcar[i].marca);
        console.log("modello"+allcar[i].modello);
      
     
    }
    fine();
 
    
}


delayex();

// function starting()



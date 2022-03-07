const divResultat = document.querySelector("#resultats");

let tabJeu = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];

//let tabResultat = [
//    [1,4,6,8],
//    [2,5,3,7],
//    [3,8,4,2],
//    [1,6,5,7]
//]
let tabResultat = genereTableauAléatoire();

let oldSelection = [];
let nbAffiche = 0;
let ready = true;

afficherTab();

function afficherTab(){
    let txt ="";

    for(let i=0; i < tabJeu.length; i++){
        txt += "<div>";
        for(let j=0; j < tabJeu[i].length; j++){
            if(tabJeu[i][j] === 0){
            txt +="<button class='btn btn-primary m-1' onClick='verif(\""+i+"-"+j+"\")'>Love</button>";
        }else{
            txt += "<img src='"+getImage(tabJeu[i][j])+"' class='m-1'>";
        }
    }
    txt += "</div>";
    
 }
 divResultat.innerHTML = txt;
}

function getImage(valeur){
    let imgTxt ="";
    switch(valeur){
        case 1 : imgTxt += "css/1.jpg";
        break;
        case 2 : imgTxt += "css/2.jpg";
        break;
        case 3 : imgTxt += "css/3.jpg";
        break;
        case 4 : imgTxt += "css/4.jpg";
        break;
        case 5 : imgTxt += "css/5.jpg";
        break;
        case 6 : imgTxt += "css/6.jpg";
        break;
        case 7 : imgTxt += "css/7.jpg";
        break;
        case 8 : imgTxt += "css/8.jpg";
        break;
        default : console.log("cas non pris en compte");
    }
    return imgTxt
}

function verif(bouton){
    if(ready){
        nbAffiche++;
        let ligne = bouton.substr(0,1);
        let colonne = bouton.substr(2,1);
        tabJeu[ligne][colonne] = tabResultat[ligne][colonne];
        afficherTab();
        if(nbAffiche>1){
            ready = false;
            setTimeout(() => {
                if(tabJeu[ligne][colonne] !== tabResultat[oldSelection[0]][oldSelection[1]]){
                    tabJeu[ligne][colonne] = 0;
                    tabJeu[oldSelection[0]][oldSelection[1]] = 0;
                }
                afficherTab();
                ready = true;
                nbAffiche = 0;
                oldSelection = [ligne, colonne];
            },500)
            nbAffiche = 0;
        } else {
            oldSelection = [ligne, colonne];
        }
        
    }
}

function genereTableauAléatoire(){
    let tab = [];
    let nbImagePosition=[0,0,0,0,0,0,0,0];

    for(let i = 0; i<4; i++){
        let ligne = [];
        for(let j = 0; j<4; j++){
            let fin = false;
            while(!fin){
                let randomImage = Math.floor(Math.random() * 8);
                if(nbImagePosition[randomImage]<2){
                    ligne.push(randomImage+1);
                    nbImagePosition[randomImage]++;
                    fin = true;
            }
            }
        }

        tab.push(ligne);
    }

    return tab;
}
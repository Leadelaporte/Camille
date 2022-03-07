let input = document.querySelector('#number');
let error = document.querySelector('small');
let formulaire = document.querySelector('#form');

error.style.display = "none";

let nombreAleatoire = Math.floor(Math.random() * 1001);
let coups = 0;
let nombreChoisi;

function verifier(nombre) {
    let instruction = document.createElement('div');
    if(nombre < nombreAleatoire) {
        instruction.textContent = "- " + coups + " ( " + nombre + " ) C'est plus !";
        instruction.className = "instruction plus"
    }
    else if(nombre >nombreAleatoire){
        instruction.textContent = "- " + coups + " ( " + nombre + " ) C'est moins !";
        instruction.className = "instrcution moins"
    }
    else{
        instruction.textContent = "- " + coups + " ( " + nombre + " ) Félicitation tu as trouvé le juste prix";
        instruction.className = "instruction fini"
        input.disabled = true;
    }

    document.querySelector("#instruction").prepend(instruction);
}

input.addEventListener('keyup', () => {
    if(isNaN(input.value)){
        error.style.display = 'inline';
    }else {
        error.style.display = 'none';
    }
});

formulaire.addEventListener('submit', (e) => {
    e.preventDefault();

    if(isNaN(input.value) || input.value == ""){
        input.style.borderColor = "red";
    } else {
        coups++;
        input.style.borderColor = "silver";
        nombreChoisi = input.value;
        input.value = '';
        verifier(nombreChoisi);
    }
});
 
alert('Bienvenue au CV de OUALIT Youcef');

window.addEventListener("scroll", function() { //ajoute une fonction efectuée lorsque l'utilisateur scroll sur la page

// Calculez le déplacement ici ...
var deplacement=(window.scrollY+window.innerHeight)*30/document.body.offsetHeight;
document.getElementById('progress_bar').value = deplacement; // Modifie la valeur de la barre de progression pour qu'elle corresponde au déplacement du scroll
});

function myScroll() { // Définition de la fonction de scroll
    var progress = document.getElementById('progress_bar').value; // Valeur de la barre de progression
    progress=progress*document.body.offsetHeight/30-window.innerHeight;
    // Calculez ici la valeur de déplacement à efectuer lors du scroll
    
    window.scroll(0,progress) ;// Déplacement de la page de 0 px latéralement et 'value' px horizontalement
}

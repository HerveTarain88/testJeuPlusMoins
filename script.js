var min;
var max;
var solution;
var nombreEssai;
init ();

function init() {
    min = 0;
    max = 100;
    solution = Math.floor(Math.random() * (max - min) + min);
    console.log(solution);
    nombreEssai = 5; 
}

function finDePartie() {
    $("#okButton, #propositionField").prop('disabled', true);
    $("#rejouer").prop('disabled', false);   
} 

$("#okButton").click(function() {
    if(nombreEssai > 0) {
        var proposition = $("#propositionField").val();
        
        //créer un li qui archive la proposition
        var text2print = 'Vous avez proposez '+proposition;

        //vérifier la réponse en question
        if(proposition == solution) {
            text2print = text2print += " BRAVOOOOO !!!!";
            finDePartie();
        } else if(proposition < solution ) {
            text2print += " c'est plus!";
        } else {
            text2print += " c'est moins !";
        }
        $("#historique").append('<li>'+text2print+'</li>');
        nombreEssai--;

    } else {
        finDePartie();
    }
});


$("#rejouer").click(function() {
    init();
    //vider les li 
    $("#historique li").remove();
    $("#okButton, #propositionField").prop('disabled', false);
    $("#rejouer").prop('disabled', true);
});


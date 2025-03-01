var arrowLeft = window.document.getElementById('arrowLeft');
var leonardo = window.document.getElementById('Leonardo');
var samantha = window.document.getElementById('Samantha');
var bruna = window.document.getElementById('Bruna');
var arrowRight = window.document.getElementById('arrowRight');

function movementRight(){
    leonardo.style = "display:none";
    bruna.style = "display:flex"
    arrowRight.style = "display:none"
    arrowLeft.style = "display:flex"
}

function movementLeft(){
    leonardo.style = "display:flex";
    bruna.style = "display:none"
    arrowRight.style = "display:flex "
    arrowLeft.style = "display:none "
}
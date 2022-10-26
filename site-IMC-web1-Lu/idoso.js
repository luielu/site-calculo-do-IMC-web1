function calc()
{
   
var e1 = parseFloat(document.getElementById("peso").value);
var e2 = parseFloat(document.getElementById("altura").value);
document.getElementById("res").innerHTML = "RESPOSTA: " + (e1 /(e2*e2));

var e3 = e1 / (e2*e2).toFixed(2);

var img = document.getElementById("img");


if(e3 >= 0 && e3 <= 22){
    document.getElementById("qualimc").innerHTML = 'abaixo do peso';
    img.src = "imagem.imc/baixopeso-removebg-preview.png"
}
else if(e3 > 22  && e3 <27){
    document.getElementById("qualimc").innerHTML = 'peso normal';
    img.src = "imagem.imc/normalidoso-removebg-preview.png"
}
else if(e3 >= 27){
    document.getElementById("qualimc").innerHTML = 'exesso de peso';
    img.src = "imagem.imc/acimadopeso-removebg-preview.png"
}

}

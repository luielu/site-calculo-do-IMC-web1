function calc()
{
   
var e1 = parseFloat(document.getElementById("peso").value);
var e2 = parseFloat(document.getElementById("altura").value);
document.getElementById("res").innerHTML = "RESPOSTA: " + (e1 /(e2*e2)).toFixed(2);

var e3 = e1 / (e2*e2).toFixed(2);

var img = document.getElementById("img");


if(e3 >= 0 && e3 <18.5){
    document.getElementById("qualimc").innerHTML = 'abaixo do peso';
    img.src = "imagem.imc/baixodopeso-removebg-preview.png"
}
else if(e3 >= 18.5 && e3 <24.9){
    document.getElementById("qualimc").innerHTML = 'peso normal';
    img.src = "imagem.imc/normal-removebg-preview.png"
}

else if(e3 >= 25 && e3 <29.9){
    document.getElementById("qualimc").innerHTML = 'exesso de peso';
    img.src = "imagem.imc/acima-do-peso-removebg-preview.png"
}
else if(e3 >= 30 && e3 <34.9){
    document.getElementById("qualimc").innerHTML = 'obesidade classe 1';
    img.src = "imagem.imc/obes1-removebg-preview.png"
}
else if(e3 >= 35 && e3 <39.9){
    document.getElementById("qualimc").innerHTML = 'obesidade classe 2';
    img.src = "imagem.imc/obes2-removebg-preview.png"
}
else if(e3 >= 40){
    document.getElementById("qualimc").innerHTML = 'obesidade classe 3';
    img.src = "imagem.imc/obes3-removebg-preview.png"
}
}



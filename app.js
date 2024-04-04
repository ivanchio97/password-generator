var rango = document.getElementById("max");
var valoractual = document.getElementById("valoractual");
rango.addEventListener("input",function(){
    valoractual.innerText = rango.value;
});

function generate()
{
let longitud = 0;
let pass_generated ="";
var completo = [];
var minusculas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var mayusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var simbolos = ["!", "@", "#", "$", "%", "&", "*", "?", "-", "_", "+", "=", "~", "<", ">", "|", "/", "(", ")", "[", "]", "{", "}"];
var numeros = [1,2,3,4,5,6,7,8,9,0];
const level1 = document.getElementById("level1");
const level2 = document.getElementById("level2");
const level3 = document.getElementById("level3");
const level_text = document.getElementById("stre-text");
const uppercase = document.getElementById("uppercase").checked;
const lowercase = document.getElementById("lowercase").checked;
const numbers = document.getElementById("numbers").checked;
const symbols = document.getElementById("symbols").checked;
const password = document.getElementById("password");
password.innerText="P4$WOrD!";
let ran = 0;
let max = document.getElementById("max").value;


if(uppercase==true||lowercase==true||numbers==true||symbols==true)
{
    
    if(numbers==true)
    {
        completo = completo.concat(numeros);
    }
    if(symbols==true)
    {
        completo = completo.concat(simbolos);
    }
    if(uppercase==true)
    {
        completo = completo.concat(mayusculas);
    }
    if(lowercase==true)
    {
        completo = completo.concat(minusculas);
    }
    longitud = completo.length-1;
    for(i = 0;i<max;i++)
    {
        ran = Math.floor(Math.random() * (longitud - 0 + 1)) + 0;
        pass_generated=pass_generated+completo[ran];
    }
    password.innerText = pass_generated;

    if(numbers==true && symbols==true && uppercase==true && lowercase==true && max>11)
    {
        level1.style.backgroundColor = "#90f965";
        level2.style.backgroundColor = "#90f965";
        level3.style.backgroundColor = "#90f965";
        level_text.innerText = "STRONG";
    }
    else if((numbers==true || symbols==true) && (uppercase==true || lowercase==true) && max>7 && max<16)
    {
        level1.style.backgroundColor = "#f7cf63";
        level2.style.backgroundColor = "#f7cf63";
        level3.style.backgroundColor = "var(--black)";
        level_text.innerText = "MEDIUM";
    }
    else if((numbers==true || symbols==true || uppercase==true || lowercase==true) && max<9)
    {
        level1.style.backgroundColor = "#f76363";
        level2.style.backgroundColor = "var(--black)";
        level3.style.backgroundColor = "var(--black)";
        level_text.innerText = "LOW";
    }
    


}




}
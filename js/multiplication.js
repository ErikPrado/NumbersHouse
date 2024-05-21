// >>>>>>>>>> Event to open and close language window <<<<<<<<<<
// >>>>>>>>>> Evento para abrir y cerrar la ventana de idioma. <<<<<<<<<<
// >>>>>>>>>> Evento para abir e fechar janela de linguagem <<<<<<<<<<
function openTranslate(){
    if(document.getElementById('languageWindow').style.visibility="hidden"){
        document.getElementById('languageWindow').style.visibility="visible";
    } else {
        document.getElementById('languageWindow').style.visibility="hidden"
    }
}


function cls(){
    document.getElementById('languageWindow').style.visibility="hidden"
}
// >>>>>>>>>> Event to open and close language window <<<<<<<<<<
// >>>>>>>>>> Evento para abrir y cerrar la ventana de idioma. <<<<<<<<<<
// >>>>>>>>>> Evento para abir e fechar janela de linguagem <<<<<<<<<<





// >>>>>>>>>> Function to multiply X up to the 10th place <<<<<<<<<<
// >>>>>>>>>> Función para multiplicar X hasta el décimo lugar <<<<<<<<<<
// >>>>>>>>>> Função para multiplicar X até a casa 10 <<<<<<<<<<
function calcX10(){
    let numberX10 = document.getElementById('numberX10');
    let valorNumberX10 = (numberX10.value);

    let vlrNX0 = valorNumberX10 * 0;
    let vlrNX1 = valorNumberX10 * 1;
    let vlrNX2 = valorNumberX10 * 2;
    let vlrNX3 = valorNumberX10 * 3;
    let vlrNX4 = valorNumberX10 * 4;
    let vlrNX5 = valorNumberX10 * 5;
    let vlrNX6 = valorNumberX10 * 6;
    let vlrNX7 = valorNumberX10 * 7;
    let vlrNX8 = valorNumberX10 * 8;
    let vlrNX9 = valorNumberX10 * 9;
    let vlrNX10 = valorNumberX10 * 10;

    let multiDone = `
    <p class="p-multi-result"> <span class="color-green"> ${valorNumberX10} </span> x 0 = ${vlrNX0} </p>
    <p class="p-multi-result"> <span class="color-green"> ${valorNumberX10} </span> x 1 = ${vlrNX1} </p>
    <p class="p-multi-result"> <span class="color-green"> ${valorNumberX10} </span> x 2 = ${vlrNX2} </p>
    <p class="p-multi-result"> <span class="color-green"> ${valorNumberX10} </span> x 3 = ${vlrNX3} </p>
    <p class="p-multi-result"> <span class="color-green"> ${valorNumberX10} </span> x 5 = ${vlrNX5} </p>
    <p class="p-multi-result"> <span class="color-green"> ${valorNumberX10} </span> x 6 = ${vlrNX6} </p>
    <p class="p-multi-result"> <span class="color-green"> ${valorNumberX10} </span> x 7 = ${vlrNX7} </p>
    <p class="p-multi-result"> <span class="color-green"> ${valorNumberX10} </span> x 4 = ${vlrNX4} </p>
    <p class="p-multi-result"> <span class="color-green"> ${valorNumberX10} </span> x 8 = ${vlrNX8} </p>
    <p class="p-multi-result"> <span class="color-green"> ${valorNumberX10} </span> x 9 = ${vlrNX9} </p>
    <p class="p-multi-result"> <span class="color-green"> ${valorNumberX10} </span> x 10 = ${vlrNX10} </p>
    `

    document.getElementById('pMultResult').innerHTML = `${multiDone}`;

}
// >>>>>>>>>> Function to multiply X up to the 10th place <<<<<<<<<<
// >>>>>>>>>> Función para multiplicar X hasta el décimo lugar <<<<<<<<<<
// >>>>>>>>>> Função para multiplicar X até a casa 10 <<<<<<<<<<






// >>>>>>>>>> Function to multiply X and y <<<<<<<<<<
// >>>>>>>>>> Función para multiplicar X e y <<<<<<<<<<
// >>>>>>>>>> Função para multiplicar X e y <<<<<<<<<<
function calcNumberXY(){
    let numberXY1 = document.getElementById('numberXY1');
    let numberXY2 = document.getElementById('numberXY2');

    let valorNumberXY1 = (numberXY1.value);
    let valorNumberXY2 = (numberXY2.value);

    let result = valorNumberXY1 * valorNumberXY2;

    document.getElementById('numberXYResult').innerHTML=`${result}`;

    document.getElementById('pMultResultXX').innerHTML=`A multiplicação entre <span class="color-green">${valorNumberXY1}</span> e <span class="color-green">${valorNumberXY2}</span> é igual a: <span class="color-green">${result}</span>.`
}

function clearX10(){
    let numberX10 = document.getElementById('numberX10');
    document.getElementById('pMultResult').innerHTML = "";
    numberX10.value = "";
    numberX10.focus();
}
// >>>>>>>>>> Function to multiply X and y <<<<<<<<<<
// >>>>>>>>>> Función para multiplicar X e y <<<<<<<<<<
// >>>>>>>>>> Função para multiplicar X e y <<<<<<<<<<





// >>>>>>>>>> Function to clear the numbers X and y <<<<<<<<<<
// >>>>>>>>>> Función para borrar los números X e y. <<<<<<<<<<
// >>>>>>>>>> Função para limpar os números X e y <<<<<<<<<<
function clearNumberXY(){
    let numberXY1 = document.getElementById('numberXY1');
    let numberXY2 = document.getElementById('numberXY2');

    numberXY1.value = "";
    numberXY2.value = "";

    document.getElementById('numberXYResult').innerHTML="";
    document.getElementById('pMultResultXX').innerHTML="";

    numberXY1.focus();
}
// >>>>>>>>>> Function to clear the numbers X and y <<<<<<<<<<
// >>>>>>>>>> Función para borrar los números X e y. <<<<<<<<<<
// >>>>>>>>>> Função para limpar os números X e y <<<<<<<<<<





// >>>>>>>>>> function to translate into other languages <<<<<<<<<<
// >>>>>>>>>> función para traducir a otros idiomas <<<<<<<<<<
// >>>>>>>>>> função de traduzir para outros idiomas <<<<<<<<<<
let pLangWindow = document.getElementById('pLangWindow');
let pLangInfo =document.getElementById('pLangInfo');
let pArticles = document.getElementById('pArticles');
let pTools = document.getElementById('pTools');
let pAbout = document.getElementById('pAbout');
let pMult = document.getElementById('pMult');
let pNavSit = document.getElementById('pNavSit');
let hSubTxt = document.getElementById('hSubTxt');
let pTxt10 = document.getElementById('pTxt10');
let pTxtXY = document.getElementById('pTxtXY');
let pBtnMulti = document.getElementById('pBtnMulti');
let pBtnClr = document.getElementById('pBtnClr');
let pBtnMulti2 = document.getElementById('pBtnMulti2');
let pBtnClr2 = document.getElementById('pBtnClr2');
let numberX10 = document.getElementById('numberX10');
let numberXY1 = document.getElementById('numberXY1');
let numberXY2 = document.getElementById('numberXY2');
function translateEnglish() {
    pMult.innerHTML = 'Multiplication';
    pNavSit.innerHTML = 'Home > Tools > <span class="page-slct">Multiplication</span>';
    pArticles.innerHTML = 'Articles';
    pTools.innerHTML = 'Tools';
    pAbout.innerHTML = 'About';
    pLangInfo.innerHTML = 'Languages';
    pLangWindow.innerHTML = 'Languages';
    pTxt10.innerHTML = 'Enter the value to multiply up to 10:';
    pTxtXY.innerHTML = 'Enter the values to be multiplied:';
    pBtnMulti.innerHTML = 'Multiply';
    pBtnClr.innerHTML = 'Clear';
    pBtnMulti2.innerHTML = 'Multiply';
    pBtnClr2.innerHTML = 'Clear';
    numberX10.placeholder = "Value:";
    numberXY1.placeholder = "Value 01:"
    numberXY2.placeholder = "Value 02:"
}
function translateEspanol() {
    pMult.innerHTML = 'Multiplicación';
    pNavSit.innerHTML = 'Home > Tools > <span class="page-slct">Multiplicación</span>';
    pArticles.innerHTML = 'Artículos';
    pTools.innerHTML = 'Herramientas';
    pAbout.innerHTML = 'Acerca de';
    pLangInfo.innerHTML = 'Idiomas';
    pLangWindow.innerHTML = 'Idiomas';
    pTxt10.innerHTML = 'Ingrese el valor para multiplicar hasta 10:';
    pTxtXY.innerHTML = 'Ingrese los valores a multiplicar:';
    pBtnMulti.innerHTML = 'Multiplicar';
    pBtnClr.innerHTML = 'Apagar';
    pBtnMulti2.innerHTML = 'Multiplicar';
    pBtnClr2.innerHTML = 'Apagar';
    numberX10.placeholder = "Valor:";
    numberXY1.placeholder = "Valor 01:"
    numberXY2.placeholder = "Valor 02:"
}

function translatePortugues() {
    pMult.innerHTML = 'Multiplicação';
    pNavSit.innerHTML = 'Home > Tools > <span class="page-slct">Multiplicação</span>';
    pArticles.innerHTML = 'Artigos';
    pTools.innerHTML = 'Ferramentas';
    pAbout.innerHTML = 'Sobre';
    pLangInfo.innerHTML = 'Idiomas';
    pLangWindow.innerHTML = 'Idiomas';
    pTxt10.innerHTML = 'Digite o valor para multiplicar até 10:';
    pTxtXY.innerHTML = 'Digite os valores para serem multiplicados:';
    pBtnMulti.innerHTML = 'Multiplicar';
    pBtnClr.innerHTML = 'Limpar';
    pBtnMulti2.innerHTML = 'Multiplicar';
    pBtnClr2.innerHTML = 'Limpar';
    numberX10.placeholder = "Valor:";
    numberXY1.placeholder = "Valor 01:"
    numberXY2.placeholder = "Valor 02:"
}
// >>>>>>>>>> function to translate into other languages <<<<<<<<<<
// >>>>>>>>>> función para traducir a otros idiomas <<<<<<<<<<
// >>>>>>>>>> função de traduzir para outros idiomas <<<<<<<<<<
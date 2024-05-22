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

    document.getElementById('pMultResultXX').innerHTML=`A multiplicação entre   <span class="color-green"> ${valorNumberXY1}</span>  e <span class="color-green">${valorNumberXY2}</span> é igual a: <span class="color-green">${result}</span>`
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
function translateEnglish() {
    document.getElementById('pMult').innerHTML = 'Multiplication';
    document.getElementById('pNavSit').innerHTML = 'Main Page > Tools > <span class="page-slct">Multiplication</span>';
    document.getElementById('pArticles').innerHTML = 'Articles';
    document.getElementById('pTools').innerHTML = 'Tools';
    document.getElementById('pAbout').innerHTML = 'About';
    document.getElementById('pLangInfo').innerHTML = 'Languages';
    document.getElementById('pLangWindow').innerHTML = 'Languages';
    document.getElementById('pTxt10').innerHTML = 'Enter the value to multiply up to 10:';
    document.getElementById('pTxtXY').innerHTML = 'Enter the values to be multiplied:';
    document.getElementById('pBtnMulti').innerHTML = 'Multiply';
    document.getElementById('pBtnClr').innerHTML = 'Clear';
    document.getElementById('pBtnMulti2').innerHTML = 'Multiply';
    document.getElementById('pBtnClr2').innerHTML = 'Clear';
    document.getElementById('numberX10').placeholder = "Value:";
    document.getElementById('numberXY1').placeholder = "Value 01:";
    document.getElementById('numberXY2').placeholder = "Value 02:";
}
function translateEspanol() {
    document.getElementById('pMult').innerHTML = 'Multiplicación';
    document.getElementById('pNavSit').innerHTML = 'Pagina Principal > Herramientas > <span class="page-slct">Multiplicación</span>';
    document.getElementById('pArticles').innerHTML = 'Artículos';
    document.getElementById('pTools').innerHTML = 'Herramientas';
    document.getElementById('pAbout').innerHTML = 'Acerca de';
    document.getElementById('pLangInfo').innerHTML = 'Idiomas';
    document.getElementById('pLangWindow').innerHTML = 'Idiomas';
    document.getElementById('pTxt10').innerHTML = 'Ingrese el valor para multiplicar hasta 10:';
    document.getElementById('pTxtXY').innerHTML = 'Ingrese los valores a multiplicar:';
    document.getElementById('pBtnMulti').innerHTML = 'Multiplicar';
    document.getElementById('pBtnClr').innerHTML = 'Apagar';
    document.getElementById('pBtnMulti2').innerHTML = 'Multiplicar';
    document.getElementById('pBtnClr2').innerHTML = 'Apagar';
    document.getElementById('numberX10').placeholder = "Valor:";
    document.getElementById('numberXY1').placeholder = "Valor 01:"
    document.getElementById('numberXY2').placeholder = "Valor 02:"
}

function translatePortugues() {
    document.getElementById('pMult').innerHTML = 'Multiplicação';
    document.getElementById('pNavSit').innerHTML = 'Página Principal > Ferramentas > <span class="page-slct">Multiplicação</span>';
    document.getElementById('pArticles').innerHTML = 'Artigos';
    document.getElementById('pTools').innerHTML = 'Ferramentas';
    document.getElementById('pAbout').innerHTML = 'Sobre';
    document.getElementById('pLangInfo').innerHTML = 'Idiomas';
    document.getElementById('pLangWindow').innerHTML = 'Idiomas';
    document.getElementById('pTxt10').innerHTML = 'Digite o valor para multiplicar até 10:';
    document.getElementById('pTxtXY').innerHTML = 'Digite os valores para serem multiplicados:';
    document.getElementById('pBtnMulti').innerHTML = 'Multiplicar';
    document.getElementById('pBtnClr').innerHTML = 'Limpar';
    document.getElementById('pBtnMulti2').innerHTML = 'Multiplicar';
    document.getElementById('pBtnClr2').innerHTML = 'Limpar';
    document.getElementById('numberX10').placeholder = "Valor:";
    document.getElementById('numberXY1').placeholder = "Valor 01:"
    document.getElementById('numberXY2').placeholder = "Valor 02:"
}
// >>>>>>>>>> function to translate into other languages <<<<<<<<<<
// >>>>>>>>>> función para traducir a otros idiomas <<<<<<<<<<
// >>>>>>>>>> função de traduzir para outros idiomas <<<<<<<<<<
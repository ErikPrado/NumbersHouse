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
    
    numberX10.value = "";
    numberX10.focus();
    
}




































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
function translateEnglish() {
    pMult.innerHTML = 'Multiplication';
    pNavSit.innerHTML = 'Home > Tools > <span class="page-slct">Multiplication</span>';
    hSubTxt.innerHTML = 'NUMBERS HOUSE PRESENTS:'
    pArticles.innerHTML = 'Articles';
    pTools.innerHTML = 'Tools';
    pAbout.innerHTML = 'About';
    pLangInfo.innerHTML = 'Languages';
    pLangWindow.innerHTML = 'Languages';
}
function translateEspanol() {
    pMult.innerHTML = 'Multiplicación';
    pNavSit.innerHTML = 'Home > Tools > <span class="page-slct">Multiplicación</span>';
    hSubTxt.innerHTML = 'NUMBERS HOUSE PRESENTA:'
    pArticles.innerHTML = 'Artículos';
    pTools.innerHTML = 'Herramientas';
    pAbout.innerHTML = 'Acerca de';
    pLangInfo.innerHTML = 'Idiomas';
    pLangWindow.innerHTML = 'Idiomas';
}

function translatePortugues() {
    pMult.innerHTML = 'Multiplicação';
    pNavSit.innerHTML = 'Home > Tools > <span class="page-slct">Multiplicação</span>';
    hSubTxt.innerHTML = 'NUMBERS HOUSE APRESENTA:'
    pArticles.innerHTML = 'Artigos';
    pTools.innerHTML = 'Ferramentas';
    pAbout.innerHTML = 'Sobre';
    pLangInfo.innerHTML = 'Idiomas';
    pLangWindow.innerHTML = 'Idiomas';
}
// >>>>>>>>>> function to translate into other languages <<<<<<<<<<
// >>>>>>>>>> función para traducir a otros idiomas <<<<<<<<<<
// >>>>>>>>>> função de traduzir para outros idiomas <<<<<<<<<<
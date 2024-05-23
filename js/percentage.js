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





function percentage1Calc(){
    let percentageACalc1 = document.getElementById('percentageACalc1');
    let percentageBCalc1 = document.getElementById('percentageBCalc1');

    let percentageValueACalc1 = (percentageACalc1.value);
    let percentageValueBCalc1 = (percentageBCalc1.value);

    let multPercentageValueCal1 = percentageValueACalc1 * percentageValueBCalc1;
    let resultPercentageValueCal1 = multPercentageValueCal1 / 100;

    document.getElementById('pResultPercentage1').innerHTML = `<p class="p-result-percentage"> ${percentageValueACalc1}% de ${percentageValueBCalc1} é igual a:  <span class="color-green"> ${resultPercentageValueCal1}</span> </p>`;
}
function percentage1Cls(){
    let percentageACalc1 = document.getElementById('percentageACalc1');
    let percentageBCalc1 = document.getElementById('percentageBCalc1');

    percentageACalc1.value = "";
    percentageBCalc1.value = "";
    document.getElementById('pResultPercentage1').innerHTML = "";

    percentageACalc1.focus();
}









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
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





function calcRuleGDP(){
    let rule1GDP = document.getElementById('rule1GDP');
    let rule2GDP = document.getElementById('rule2GDP');
    let rule3GDP = document.getElementById('rule3GDP');

    let valueRule1GDP = (rule1GDP.value);
    let valueRule2GDP = (rule2GDP.value);
    let valueRule3GDP = (rule3GDP.value);

    let multiRuleGPD = valueRule2GDP * valueRule3GDP;
    let resultRuleGPD = multiRuleGPD / valueRule1GDP;

    document.getElementById('pResultRuleGPD').innerHTML = ` <p class="p-result-ruleGPD"> <span class="color-green"> X </span> = ${resultRuleGPD} </p>`
}

function clearRuleGPD(){
    let rule1GDP = document.getElementById('rule1GDP');
    let rule2GDP = document.getElementById('rule2GDP');
    let rule3GDP = document.getElementById('rule3GDP');
    

    rule1GDP.value = "";
    rule2GDP.value = "";
    rule3GDP.value = "";


    document.getElementById('pResultRuleGPD').innerHTML = "";
    rule1GDP.focus() = "";
}









function calcRuleGIP(){
    let rule1GIP = document.getElementById('rule1GIP');
    let rule2GIP = document.getElementById('rule2GIP');
    let rule3GIP = document.getElementById('rule3GIP');

    let valueRule1GIP = (rule1GIP.value);
    let valueRule2GIP = (rule2GIP.value);
    let valueRule3GIP = (rule3GIP.value);

    let multiRuleGIP = valueRule1GIP * valueRule3GIP;
    let resultRuleGIP = multiRuleGIP / valueRule2GIP;

    document.getElementById('pResultRuleGIP').innerHTML = ` <p class="p-result-ruleGPD"> <span class="color-green"> X </span> = ${resultRuleGIP} </p>`
}

function clearRuleGIP(){
    let rule1GIP = document.getElementById('rule1GIP');
    let rule2GIP = document.getElementById('rule2GIP');
    let rule3GIP = document.getElementById('rule3GIP');
    

    rule1GIP.value = "";
    rule2GIP.value = "";
    rule3GIP.value = "";


    document.getElementById('pResultRuleGIP').innerHTML = "";
    rule1GIP.focus() = "";
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
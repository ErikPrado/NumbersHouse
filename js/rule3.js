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





// >>>>>>>>>> Event to Calculate Simple Rule of 3 (Directly Proportional Quantities). <<<<<<<<<<
// >>>>>>>>>> Evento para calcular la regla de 3 simple (Cantidades directamente proporcionales). <<<<<<<<<<
// >>>>>>>>>> Evento para Calcular Regra de 3 Simples (Grandezas Diretamente Proporcionais). <<<<<<<<<<
function calcRuleGDP(){
    let rule1GDP = document.getElementById('rule1GDP');
    let rule2GDP = document.getElementById('rule2GDP');
    let rule3GDP = document.getElementById('rule3GDP');

    let valueRule1GDP = (rule1GDP.value);
    let valueRule2GDP = (rule2GDP.value);
    let valueRule3GDP = (rule3GDP.value);

    let multiRuleGDP = valueRule2GDP * valueRule3GDP;
    let resultRuleGDP = multiRuleGDP / valueRule1GDP;

    document.getElementById('pResultRuleGPD').innerHTML = ` <p class="p-result-ruleGPD"> <span class="color-green"> X </span> = ${resultRuleGDP} </p>`
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
// >>>>>>>>>> Event to Calculate Simple Rule of 3 (Directly Proportional Quantities). <<<<<<<<<<
// >>>>>>>>>> Evento para calcular la regla de 3 simple (Cantidades directamente proporcionales). <<<<<<<<<<
// >>>>>>>>>> Evento para Calcular Regra de 3 Simples (Grandezas Diretamente Proporcionais). <<<<<<<<<<





// >>>>>>>>>> Evento para Calcular Regra de 3 Simples (Grandezas Indiretamente Proporcionais). <<<<<<<<<<
// >>>>>>>>>> Evento para calcular la regla de 3 simple (Cantidades indirectamente proporcionales).. <<<<<<<<<<
// >>>>>>>>>> Evento para Calcular Regra de 3 Simples (Grandezas Indiretamente Proporcionais). <<<<<<<<<<
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
// >>>>>>>>>> Evento para Calcular Regra de 3 Simples (Grandezas Indiretamente Proporcionais). <<<<<<<<<<
// >>>>>>>>>> Evento para calcular la regla de 3 simple (Cantidades indirectamente proporcionales).. <<<<<<<<<<
// >>>>>>>>>> Evento para Calcular Regra de 3 Simples (Grandezas Indiretamente Proporcionais). <<<<<<<<<<





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
let pBtnCalcGDP = document.getElementById('pBtnCalcGDP');
let pBtnClrGDP = document.getElementById('pBtnClrGDP');
let pBtnCalcGIP = document.getElementById('pBtnCalcGIP');
let pBtnClrGIP = document.getElementById('pBtnClrGIP');
let rule1GIP = document.getElementById('rule1GIP');
let rule2GIP = document.getElementById('rule2GIP');
let rule3GIP = document.getElementById('rule3GIP');
let rule1GDP = document.getElementById('rule1GDP');
let rule2GDP = document.getElementById('rule2GDP');
let rule3GDP = document.getElementById('rule3GDP');
let pTxtRule1 = document.getElementById('pTxtRule1');
let pTxtRule2 = document.getElementById('pTxtRule2');
let pTxtRuleGDP = document.getElementById('pTxtRuleGDP');
let pTxtRuleGIP = document.getElementById('pTxtRuleGIP');




function translateEnglish() {
    pMult.innerHTML = 'Simple and Compound Rule of 3';
    pNavSit.innerHTML = 'Home > Tools > <span class="page-slct">Rule of 3</span>';
    pArticles.innerHTML = 'Articles';
    pTools.innerHTML = 'Tools';
    pAbout.innerHTML = 'About';
    pLangInfo.innerHTML = 'Languages';
    pLangWindow.innerHTML = 'Languages';
    pBtnCalcGDP.innerHTML = 'Calculate';
    pBtnClrGDP.innerHTML = 'Clear';
    pBtnCalcGIP.innerHTML = 'Calculate';
    pBtnClrGIP.innerHTML = 'Clear';
    rule1GIP.placeholder = "Value 01:";
    rule2GIP.placeholder = "Value 02:";
    rule3GIP.placeholder = "Value 03:";
    rule1GDP.placeholder = "Value 01:";
    rule2GDP.placeholder = "Value 02:";
    rule3GDP.placeholder = "Value 03:";
    pTxtRule1.innerHTML = "Rule of 3";
    pTxtRule2.innerHTML = "Rule of 3";
    pTxtRuleGDP.innerHTML = "Directly Proportional Quantities";
    pTxtRuleGIP.innerHTML = "Indirectly Proportional Quantities";
}
function translateEspanol() {
    pMult.innerHTML = 'Regla de 3 Simple y Compuesta';
    pNavSit.innerHTML = 'Home > Tools > <span class="page-slct">Regla de 3</span>';
    pArticles.innerHTML = 'Articles';
    pTools.innerHTML = 'Tools';
    pAbout.innerHTML = 'About';
    pLangInfo.innerHTML = 'Languages';
    pLangWindow.innerHTML = 'Languages';
    pBtnCalcGDP.innerHTML = 'Calcular';
    pBtnClrGDP.innerHTML = 'Apagar';
    pBtnCalcGIP.innerHTML = 'Calcular';
    pBtnClrGIP.innerHTML = 'Apagar';
    rule1GIP.placeholder = "Valor 01:";
    rule2GIP.placeholder = "Valor 02:";
    rule3GIP.placeholder = "Valor 03:";
    rule1GDP.placeholder = "Valor 01:";
    rule2GDP.placeholder = "Valor 02:";
    rule3GDP.placeholder = "Valor 03:";
    pTxtRule1.innerHTML = "Regla de 3";
    pTxtRule2.innerHTML = "Regla de 3";
    pTxtRuleGDP.innerHTML = "Cantidades Directamente Proporcionales";
    pTxtRuleGIP.innerHTML = "Cantidades Indirectamente Proporcionales";
}

function translatePortugues() {
    pMult.innerHTML = 'Regra de 3 Simples e Composta';
    pNavSit.innerHTML = 'Home > Tools > <span class="page-slct">Regra de 3</span>';
    pArticles.innerHTML = 'Articles';
    pTools.innerHTML = 'Tools';
    pAbout.innerHTML = 'About';
    pLangInfo.innerHTML = 'Languages';
    pLangWindow.innerHTML = 'Languages';
    pBtnCalcGDP.innerHTML = 'Calcular';
    pBtnClrGDP.innerHTML = 'Limpar';
    pBtnCalcGIP.innerHTML = 'Calcular';
    pBtnClrGIP.innerHTML = 'Limpar';
    rule1GIP.placeholder = "Valor 01:";
    rule2GIP.placeholder = "Valor 02:";
    rule3GIP.placeholder = "Valor 03:";
    rule1GDP.placeholder = "Valor 01:";
    rule2GDP.placeholder = "Valor 02:";
    rule3GDP.placeholder = "Valor 03:";
    pTxtRule1.innerHTML = "Regra de 3";
    pTxtRule2.innerHTML = "Regra de 3";
    pTxtRuleGDP.innerHTML = "Grandezas Diretamente Proporcionais";
    pTxtRuleGIP.innerHTML = "Grandezas Indiretamente Proporcionais";
}
// >>>>>>>>>> function to translate into other languages <<<<<<<<<<
// >>>>>>>>>> función para traducir a otros idiomas <<<<<<<<<<
// >>>>>>>>>> função de traduzir para outros idiomas <<<<<<<<<<
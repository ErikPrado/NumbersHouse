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
function translateEnglish() {
    document.getElementById('hTxt').innerHTML = 'Simple Rule of Three';
    document.getElementById('pNavSit').innerHTML = 'Main Page > Tools > <span class="page-slct">Simple Rule of Three</span>';
    document.getElementById('pArticles').innerHTML = 'Articles';
    document.getElementById('pTools').innerHTML = 'Tools';
    document.getElementById('pAbout').innerHTML = 'About';
    document.getElementById('pLangInfo').innerHTML = 'Languages';
    document.getElementById('pLangWindow').innerHTML = 'Languages';
    document.getElementById('pBtnCalcGDP').innerHTML = 'Calculate';
    document.getElementById('pBtnCalcGIP').innerHTML = 'Calculate';
    document.getElementById('pBtnClrGDP').innerHTML = 'Clear';
    document.getElementById('pBtnClrGIP').innerHTML = 'Clear';
    document.getElementById('rule1GIP').placeholder = "Value 01:";
    document.getElementById('rule2GIP').placeholder = "Value 02:";
    document.getElementById('rule3GIP').placeholder = "Value 03:";
    document.getElementById('rule1GDP').placeholder = "Value 01:";
    document.getElementById('rule2GDP').placeholder = "Value 02:";
    document.getElementById('rule3GDP').placeholder = "Value 03";
    document.getElementById('pTxtRule1').innerHTML = "Simple rule of three"
    document.getElementById('pTxtRule2').innerHTML = "Simple rule of three"
    document.getElementById('pTxtRuleGDP').innerHTML = "Greatness You Directly Provide:";
    document.getElementById('pTxtRuleGIP').innerHTML = "Greatness Indirectly You Provide:";
    document.getElementById('hSubTxtSection').innerHTML = 'NUMBERS HOUSE APRESENTA:';
    document.getElementById('hTxtSection').innerHTML = 'Learning simple rule of three.';
    document.getElementById('subTxtRule1').innerHTML = 'How to calculate?';
    document.getElementById('pRule1').innerHTML = 'The rule of three is a mathematical operation with the purpose of solving many problems that involve two or more quantities, which may be directly proportional quantities or indirectly proportional quantities. <br> Based on this, we can say that the rule of three allows us to find an unidentified value by relating three or more identified values. <br> Numbers House invites you to learn about the rule of three:';
    document.getElementById('pRule2').innerHTML = 'The rule of three is a proportion between two quantities. In other words, the problem will always present two magnitudes, which may be speed and time, sales and profit, etc.';
    document.getElementById('pRule3').innerHTML = 'To resolve the problem, we have to interpret the problem, know how to separate all the elements and classify them.';    
    document.getElementById('subTxtRule2').innerHTML ='Example of rule of three with directly proportional quantities:';
    document.getElementById('pRule4').innerHTML = 'Using 9 liters of paint, the painter can paint 18m² of wall. I want to paint 50m² of wall, how many liters of paint will the painter need?';
    document.getElementById('pRule5').innerHTML = "Faced with the problem, we were able to understand the quantities: Liters and Meters. So let's separate our elements:";
    document.getElementById('pRule6').innerHTML = 'Just by interpreting the problem we were able to put together the structure of the rule of three.';
    document.getElementById('pRule7').innerHTML = '9 liters can paint 18m².';
    document.getElementById('pRule8').innerHTML = 'How many Liters (X) can paint 50m²?';
    document.getElementById('pRule9').innerHTML = 'Liters';
    document.getElementById('pRule10').innerHTML = 'meters';
    document.getElementById('pRule11').innerHTML = 'If both quantities are direct (directly proportional quantities), where one value increases, and another value also increases, the extremes of the ratios are multiplied, in a crossed way. If the quantities are indirect (indirectly proportional quantities), the ratios are multiplied between them from the bottom to the bottom, and the top to the top.';
    document.getElementById('pRule12').innerHTML = 'To find out what magnitude it is, we must interpret the problem again. To paint 18m of wall you need 9 liters of paint, and to paint 50m of wall you will need more than 9 liters, knowing this we discover that this is a directly proportional quantity.';
    document.getElementById('pRule13').innerHTML = 'After discovering the type of quantities, we will multiply the extremes, in a crossed way, resulting in this form:';
    document.getElementById('pRule14').innerHTML = 'Next, we will discover the fourth value, the value of X, by dividing it by the multiplied result:';
    document.getElementById('pRule15').innerHTML = 'Answer: To paint 50m you will need 25 liters of paint.';
    document.getElementById('subTxtRule3').innerHTML ='Example of rule of three with indirectly proportional quantities:';
    document.getElementById('pRule16').innerHTML = "A family took a trip to the beach. She traveled in her car at an average speed of 60km/h, taking 6 hours to reach her destination. If the family were traveling at 90km/h, how long would it take to get to the beach? <br> Faced with the problem, we were able to understand the magnitudes: Speed and Time. So let's separate our elements:";
    document.getElementById('pRule17').innerHTML = 'Just by interpreting the problem we were able to put together the structure of the rule of three:';
    document.getElementById('pRule18').innerHTML = 'Traveling at an average speed of 60km/h, the trip takes around 6 hours.';
    document.getElementById('pRule19').innerHTML = 'Traveling at an average speed of 90km/h, how long will the trip take?';
    document.getElementById('pRule20').innerHTML = 'Speed';
    document.getElementById('pRule21').innerHTML = 'Time';
    document.getElementById('pRule22').innerHTML = "IIf a car traveling at an average speed of 60km/h takes 6 hours to reach its destination, increasing its speed will reduce its time. One quantity is increasing and another is decreasing, being an indirectly proportional quantity, so let's multiply the bottom by the bottom, and the top by the top, thus:";
    document.getElementById('pRule23').innerHTML = 'Next we will discover the fourth value, the value of X, by dividing it by the multiplied result.';
    document.getElementById('pRule24').innerHTML = 'Answer: Traveling at an average speed of 90km/h will take 4 hours to reach the location.';

}
function translateEspanol() {
    document.getElementById('hTxt').innerHTML = 'Sencilla regla de tres';
    document.getElementById('pNavSit').innerHTML = 'Pagina Principal > Herramientas > <span class="page-slct">Sencilla regla de tres</span>';
    document.getElementById('pArticles').innerHTML = 'Artículos';
    document.getElementById('pTools').innerHTML = 'Herramientas';
    document.getElementById('pAbout').innerHTML = 'Acerca de';
    document.getElementById('pLangInfo').innerHTML = 'Idiomas';
    document.getElementById('pLangWindow').innerHTML = 'Idiomas';
    document.getElementById('pBtnCalcGDP').innerHTML = 'Calcular';
    document.getElementById('pBtnCalcGIP').innerHTML = 'Calcular';
    document.getElementById('pBtnClrGDP').innerHTML = 'Apagar';
    document.getElementById('pBtnClrGIP').innerHTML = 'Apagar';
    document.getElementById('rule1GIP').placeholder = "Valor 01:";
    document.getElementById('rule2GIP').placeholder = "Valor 02:";
    document.getElementById('rule3GIP').placeholder = "Valor 03:";
    document.getElementById('rule1GDP').placeholder = "Valor 01:";
    document.getElementById('rule2GDP').placeholder = "Valor 02:";
    document.getElementById('rule3GDP').placeholder = "Valor 03";
    document.getElementById('pTxtRule1').innerHTML = "Sencilla regla de tres"
    document.getElementById('pTxtRule2').innerHTML = "Sencilla regla de tres"
    document.getElementById('pTxtRuleGDP').innerHTML = "Cantidades directamente proporcionales:";
    document.getElementById('pTxtRuleGIP').innerHTML = "Cantidades indirectamente proporcionales:";
    document.getElementById('hSubTxtSection').innerHTML = 'NUMBERS HOUSE PRESENTA:';
    document.getElementById('hTxtSection').innerHTML = 'Aprender la regla de tres simple.';
    document.getElementById('subTxtRule1').innerHTML ='¿Como calcular?';
    document.getElementById('pRule1').innerHTML = 'La regla de tres es una operación matemática con el propósito de resolver muchos problemas que involucran dos o más cantidades, las cuales pueden ser cantidades directamente proporcionales o cantidades indirectamente proporcionales. <br> Con base en esto, podemos decir que la regla de tres nos permite encontrar un valor no identificado relacionando tres o más valores identificados. <br> Numbers House te invita a conocer la regla de tres:';
    document.getElementById('pRule2').innerHTML = 'La regla de tres es una proporción entre dos cantidades. Es decir, el problema siempre presentará dos magnitudes, que pueden ser velocidad y tiempo, ventas y beneficio, etc.';
    document.getElementById('pRule3').innerHTML = 'Para resolver el problema, tenemos que interpretar el problema, saber separar todos los elementos y clasificarlos.';
    document.getElementById('subTxtRule2').innerHTML ='Ejemplo de regla de tres con cantidades directamente proporcionales:';
    document.getElementById('subTxtRule3').innerHTML ='Ejemplo de regla de tres con cantidades indirectamente proporcionales:';
    document.getElementById('pRule16').innerHTML = 'Una familia hizo un viaje a la playa. Viajó en su automóvil a una velocidad promedio de 60 km/h y tardó 6 horas en llegar a su destino. Si la familia viajara a 90 km/h, ¿cuánto tiempo tardaría en llegar a la playa? <br> Ante el problema, pudimos comprender las magnitudes: Velocidad y Tiempo. Entonces separemos nuestros elementos:';
    document.getElementById('pRule17').innerHTML = 'Con solo interpretar el problema pudimos armar la estructura de la regla de tres:';
    document.getElementById('pRule18').innerHTML = 'Viajando a una velocidad media de 60 km/h, el viaje dura unas 6 horas.';
    document.getElementById('pRule19').innerHTML = 'Viajando a una velocidad promedio de 90 km/h, ¿cuánto tiempo durará el viaje?';
    document.getElementById('pRule20').innerHTML = 'Velocidad';
    document.getElementById('pRule21').innerHTML = 'Tiempo';
    document.getElementById('pRule22').innerHTML = 'Si un automóvil que viaja a una velocidad promedio de 60 km/h tarda 6 horas en llegar a su destino, aumentar su velocidad reducirá su tiempo. Una cantidad es creciente y otra decreciente, siendo una cantidad indirectamente proporcional, así que multipliquemos la parte inferior por la inferior y la superior por la superior, así:';
    document.getElementById('pRule23').innerHTML = 'A continuación descubriremos el cuarto valor, el valor de X, dividiéndolo por el resultado multiplicado.';
    document.getElementById('pRule24').innerHTML = 'Respuesta: Viajando a una velocidad promedio de 90 km/h tomará 4 horas para llegar al lugar.';
    
}

function translatePortugues() {
    document.getElementById('hTxt').innerHTML = 'Regra de três simples';
    document.getElementById('pNavSit').innerHTML = 'Página Principal > Ferramentas > <span class="page-slct">Regra de três simples</span>';
    document.getElementById('pArticles').innerHTML = 'Artigos';
    document.getElementById('pTools').innerHTML = 'Ferramentas';
    document.getElementById('pAbout').innerHTML = 'Sobre';
    document.getElementById('pLangInfo').innerHTML = 'Languages';
    document.getElementById('pLangWindow').innerHTML = 'Languages';
    document.getElementById('pBtnCalcGDP').innerHTML = 'Calcular';
    document.getElementById('pBtnCalcGIP').innerHTML = 'Calcular';
    document.getElementById('pBtnClrGDP').innerHTML = 'Limpar';
    document.getElementById('pBtnClrGIP').innerHTML = 'Limpar';
    document.getElementById('rule1GIP').placeholder = "Valor 01:";
    document.getElementById('rule2GIP').placeholder = "Valor 02:";
    document.getElementById('rule3GIP').placeholder = "Valor 03:";
    document.getElementById('rule1GDP').placeholder = "Valor 01:";
    document.getElementById('rule2GDP').placeholder = "Valor 02:";
    document.getElementById('rule3GDP').placeholder = "Valor 03";
    document.getElementById('pTxtRule1').innerHTML = "Regra de três simples"
    document.getElementById('pTxtRule2').innerHTML = "Regra de três simples"
    document.getElementById('pTxtRuleGDP').innerHTML = "Grandezas Diretamente Proporcionais:";
    document.getElementById('pTxtRuleGIP').innerHTML = "Grandezas Indiretamente Proporcionais:";
    document.getElementById('hSubTxtSection').innerHTML = 'NUMBERS HOUSE APRESENTA:';
    document.getElementById('hTxtSection').innerHTML = 'Aprendendo regra de três simples.';
    document.getElementById('subTxtRule1').innerHTML ='Como calcular?';
    document.getElementById('pRule1').innerHTML = 'A regra de três é uma operação matemática com o propósito de resolver muitos problemas que envolvam duas ou mais grandezas, podendo ser grandezas diretamente proporcionais ou grandezas indiretamente proporcionais. <br> Com base nisso, podemos afirmar que a regra de três nos possibilita encontrar um valor não identificado ao relacionar três ou mais valores identificados. <br> A Numbers House te convida para aprender sobre a regra de três:';
    document.getElementById('pRule2').innerHTML = 'A regra de três é uma proporção entre duas grandezas. Ou seja, a problemática sempre irá apresentar duas grandezas, podendo ser de velocidade e tempo, venda e lucro, etc.';
    document.getElementById('pRule3').innerHTML = 'Para chegarmos na resolução do problema temos que interpretar a problemática, saber separar todos os elementos e classificá-los.';
    document.getElementById('subTxtRule2').innerHTML ='Exemplo de regra de três com grandezas diretamente proporcionais:';
    document.getElementById('pRule4').innerHTML = 'Con 9 litros de pintura, el pintor puede pintar 18m² de pared. Quiero pintar 50m² de pared ¿cuántos litros de pintura necesitará el pintor?';
    document.getElementById('pRule5').innerHTML = 'Ante el problema pudimos entender las cantidades: Litros y Metros. Entonces separemos nuestros elementos:';
    document.getElementById('pRule6').innerHTML = 'Con solo interpretar el problema pudimos armar la estructura de la regla de tres.';
    document.getElementById('pRule7').innerHTML = 'Con 9 litros se pueden pintar 18m².';
    document.getElementById('pRule8').innerHTML = '¿Con cuantos Litros (X) se pueden pintar 50m²?';
    document.getElementById('pRule9').innerHTML = 'Litros';
    document.getElementById('pRule10').innerHTML = 'Metros';
    document.getElementById('pRule11').innerHTML = 'Si ambas cantidades son directas (cantidades directamente proporcionales), donde un valor aumenta, y otro valor también aumenta, los extremos de las razones se multiplican, de forma cruzada. Si las cantidades son indirectas (cantidades indirectamente proporcionales), las razones se multiplican entre ellas de abajo hacia abajo y de arriba hacia arriba.';
    document.getElementById('pRule12').innerHTML = 'Para saber de qué magnitud es, debemos interpretar nuevamente el problema. Para pintar 18m de pared necesitas 9 litros de pintura, y para pintar 50m de pared necesitarás más de 9 litros, sabiendo esto descubrimos que esta es una cantidad directamente proporcional.';
    document.getElementById('pRule13').innerHTML = 'Después de descubrir el tipo de cantidades, multiplicaremos los extremos, de forma cruzada, dando como resultado esta forma:';
    document.getElementById('pRule14').innerHTML = 'A continuación, descubriremos el cuarto valor, el valor de X, dividiéndolo por el resultado multiplicado:';
    document.getElementById('pRule15').innerHTML = 'Respuesta: Para pintar 50m necesitarás 25 litros de pintura.';
    document.getElementById('pRule4').innerHTML = 'Utilizando 9 Litros de tinta o pintor consegue pintar 18m² de parede. Quero pintar 50m² de parede, quantos litros de tinta o pintor vai precisar?';
    document.getElementById('pRule5').innerHTML = 'Diante a problemática conseguimos entender as grandezas: Litros e Metros. Então vamos separar nossos elementos:';
    document.getElementById('pRule6').innerHTML = 'Apenas de interpretar a problemática conseguimos montar a estrutura da regra de três.';
    document.getElementById('pRule7').innerHTML = '9 Litros conseguem pintar 18m².';
    document.getElementById('pRule8').innerHTML = 'Quantos Litros (X) conseguem pintar 50m²?';
    document.getElementById('pRule9').innerHTML = 'Litros';
    document.getElementById('pRule10').innerHTML = 'Metros';
    document.getElementById('pRule11').innerHTML = 'Se ambas grandezas forem diretas (grandezas diretamente proporcionais), onde um valor aumenta, e outro valor também aumenta, os extremos das razões são multiplciados, de forma cruzada. Se as grandezas forem indiretas (grandezas indiretamente proporcionais), as razões são multiplicados entre elas de baixo pelo de baixo, e o de cima pelo de cima.';
    document.getElementById('pRule12').innerHTML = 'Para descobrir qual grandeza é devemos interpretar novamente a problemática. Para pintar 18m de parede é necessário 9 Litros de tinta, e para pintar 50m de parede vai ser necessário mais de 9 litros, sabendo disso descobrimos que se trata de uma grandeza diretamente proporcional. <br>';
    document.getElementById('pRule13').innerHTML = 'Depois de descobrir qual o tipo das grandezas, iremos multiplicar os extremos, de forma cruzada, ficando dessa forma:';
    document.getElementById('pRule14').innerHTML = 'Em seguida vamos descobrir o quarto valor, o valor de X, dividindo ele pelo resultado multiplicado:';
    document.getElementById('pRule15').innerHTML = 'Resposta: Para pintar 50m serão necessário 25 Litros de tinta.';
    document.getElementById('subTxtRule3').innerHTML ='Exemplo de regra de três com grandezas indiretamente proporcionais:';
    document.getElementById('pRule16').innerHTML = 'Uma família fez uma viagem para a praia. Ela percorreu em seu carro uma velocidade média de 60km/h levando 6 horas para chegar no seu destino. Se a família estivesse a 90km/h quanto tempo levaria para chegar na praia? <br> Diante a problemática conseguimos entender as grandezas: Velocidade e Tempo. Então vamos separar nossos elementos:';
    document.getElementById('pRule17').innerHTML = 'Apenas de interpretar a problemática conseguimos montar a estrutura da regra de três:';
    document.getElementById('pRule18').innerHTML = 'Percorrendo em uma velocidade média de 60km/h a viagem dura cerca de 6 horas.';
    document.getElementById('pRule19').innerHTML = 'Percorrendo em uma velocidade média de 90km/h, quanto tempo vai durar a viagem?';
    document.getElementById('pRule20').innerHTML = 'Velocidade';
    document.getElementById('pRule21').innerHTML = 'Tempo';
    document.getElementById('pRule22').innerHTML = 'Se um carro percorrendo uma velocidade média de 60km/h dura 6 horas para chegar em seu destino, aumentando a sua velocidade o seu tempo vai reduzir. Uma grandeza está aumentando e outra diminuindo, se tratando de uma grandeza indiretamente proporcional, portando vamos multiplicar de baixo por de baixo, e o de cima pelo de cima, ficando assim:';
    document.getElementById('pRule23').innerHTML = 'Em seguida vamos descobrir o quarto valor, o valor de X, dividindo ele pelo resulado multiplicado.';
    document.getElementById('pRule24').innerHTML = 'Resposta: Percorrendo em uma velocidade média de 90km/h irá demorar 4horas para chegar ao local.';
}  
// >>>>>>>>>> function to translate into other languages <<<<<<<<<<
// >>>>>>>>>> función para traducir a otros idiomas <<<<<<<<<<
// >>>>>>>>>> função de traduzir para outros idiomas <<<<<<<<<<
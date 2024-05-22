// >>>>>>>>>> Commands for operating the calculator <<<<<<<<<<
// >>>>>>>>>> Comandos para operar la calculadora. <<<<<<<<<<
// >>>>>>>>>> Comandos para o funcionamento da calculadora <<<<<<<<<<
var result = document.getElementById('result');

function insert(n){ // Insert Numbers | Insertar números | Inserir Números
var numberx = result.innerHTML;
result.innerHTML = numberx + n;
}

function delt(){ // Delete Numbers | Eliminar Numeros | Deletar Números
    var result = document.getElementById('result');
    result.innerHTML = "";
}

function back(){ // Back Numbers | Borrar Numeros | Apagar Números
    var resultX = result.innerHTML;
    result.innerHTML = resultX.substring(0, resultX.length -1);
}

function calc(){ // Calcule Numbers | Calcular Numeros | Calcular Números
    var resultX = result.innerHTML;

    if(resultX){
    result.innerHTML = eval(resultX);
    } 
}
// >>>>>>>>>> Commands for operating the calculator <<<<<<<<<<
// >>>>>>>>>> Comandos para operar la calculadora. <<<<<<<<<<
// >>>>>>>>>> Comandos para o funcionamento da calculadora <<<<<<<<<<






// >>>>>>>>>> Event when clicking on a specific keyboard button activates the calculator button <<<<<<<<<<
// >>>>>>>>>> El evento al hacer clic en un botón específico del teclado activa el botón de la calculadora <<<<<<<<<<
// >>>>>>>>>> Evento ao clicar em algum botão do teclado específico acionar o botão da calculadora <<<<<<<<<<
document.onkeydown = teclado;
function teclado(e){
    if (e.keyCode == 48 || e.keyCode == 96 ) { //0
        document.getElementById('btn0').click();
    }
    else if (e.keyCode == 49 || e.keyCode == 97 ) { //1
        document.getElementById('btn1').click();
    }
    else if (e.keyCode == 50 || e.keyCode == 98 ) { //2
        document.getElementById('btn2').click();
    }
    else if (e.keyCode == 51 || e.keyCode == 99 ) { //3
        document.getElementById('btn3').click();
    }
    else if (e.keyCode == 52 || e.keyCode == 100 ) { //4
        document.getElementById('btn4').click();
    }
    else if (e.keyCode == 53 || e.keyCode == 101 ) { //5
        document.getElementById('btn5').click();
    }
    else if (e.keyCode == 54 || e.keyCode == 102 ) { //6
        document.getElementById('btn6').click();
    }
    else if (e.keyCode == 55 || e.keyCode == 103 ) { //7
        document.getElementById('btn7').click();
    }
    else if (e.keyCode == 56 || e.keyCode == 104 ) { //8
        document.getElementById('btn8').click();
    }
    else if (e.keyCode == 57 || e.keyCode == 105 ) { //9
        document.getElementById('btn9').click();
    }
    else if (e.keycode == 46){ //N FUNCIONA
        console.log("digitou o apagar");
    }
    else if(e.keyCode == 67 || e.keycode == 12){ // "C" and Clear
        document.getElementById('btnClear').click();
    }
    else if(e.keyCode == 13 || e.keyCode == 187 ){ // "ENTER" and "="
        document.getElementById('btnCalcX').click();
    }
    else if(e.keyCode == 106){
        document.getElementById('btn*').click(); // *
    }
    else if(e.keyCode == 107){
        document.getElementById('btn+').click(); // +
    }
    else if(e.keyCode == 109){
        document.getElementById('btn-').click(); // - 
    }
    else if(e.keyCode == 190 ||e.keyCode == 110 ){ // ,
        document.getElementById('btnPoint').click();
    }
    else if(e.keyCode == 111){ // /
        document.getElementById('btn/').click();
    }
}
// >>>>>>>>>> Event when clicking on a specific keyboard button activates the calculator button <<<<<<<<<<
// >>>>>>>>>> El evento al hacer clic en un botón específico del teclado activa el botón de la calculadora <<<<<<<<<<
// >>>>>>>>>> Evento ao clicar em algum botão do teclado específico acionar o botão da calculadora <<<<<<<<<<





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





// >>>>>>>>>> function to translate into other languages <<<<<<<<<<
// >>>>>>>>>> función para traducir a otros idiomas <<<<<<<<<<
// >>>>>>>>>> função de traduzir para outros idiomas <<<<<<<<<<
function translateEnglish() {
    document.getElementById('pCalc').innerHTML = 'Calculator';
    document.getElementById('pNavSit').innerHTML = 'Main Page > Tools > <span class="page-slct">Calculator</span>';
    document.getElementById('hSubTxt').innerHTML = 'NUMBERS HOUSE PRESENTS:'
    document.getElementById('hTxt').innerHTML = "Calculator History"
    document.getElementById('pHistory1').innerHTML ='<span class="spc-left"></span>Currently, calculator functions are not limited to performing arithmetic operator calculations, but did you know that the first calculators invented were only limited to performing addition and subtraction calculations? <br> The Nmbers House invites you to read the summary of the calculator\u2019s history:';
    document.getElementById('pHistory2').innerHTML ='<span class="spc-left"></span>In short, the first calculator invented is not the one we are used to interacting with. Even his name was different. We are talking about Abacus, the first calculator in history. Its creation revolutionized mathematics, it was created by the Chinese in the 6th century BC, this tool had the power to perform mathematical calculations of addition and subtraction.';
    document.getElementById('pHistory3').innerHTML ='<span class="spc-left"></span>In 1942, Frenchman Blaise Pascal achieved the feat of creating a new automatic machine to perform calculations. Pascal was the son of a tax collector, he wanted to help his father improve his performance in his services, as a result he managed to develop an automatic calculator, however, similar to the Abacus, this tool could only perform addition and subtraction calculations.';
    document.getElementById('pHistory4').innerHTML ='<span class="spc-left"></span>Almost 30 years later, in 1671 in Germany, the philosopher and mathematician Gottfried Wilhelm Von Leibniz improved Pascal\u2019s project and developed a mechanism called the “graduated wheel”. His work was a calculator capable of performing addition, subtraction, multiplication, division calculations and even extracting the square root.';
    document.getElementById('pHistory5').innerHTML ='<span class="spc-left"></span>It is worth mentioning that all the calculators invented until now were large, none of them were able to fit in our pockets. This fact changed in 1947, when Austrian Curt Herztark developed the design of the first mechanical calculator, reducing its size to a cup.';
    document.getElementById('pHistory6').innerHTML ='<span class="spc-left"></span>These were the main creations and modifications of calculators, from 1973 onwards, electronic calculators emerged. As the years went by, more evolved versions of these tools emerged, until they became what we are used to in our daily lives.<br> <span> Article published on May 20, 2024.</span>';
    document.getElementById('pArticles').innerHTML = 'Articles';
    document.getElementById('pTools').innerHTML = 'Tools';
    document.getElementById('pAbout').innerHTML = 'About';
    document.getElementById('pLangInfo').innerHTML = 'Languages';
    document.getElementById('pLangWindow').innerHTML = 'Languages';   
}
function translateEspanol() {
    document.getElementById('pCalc').innerHTML = 'Calculadora';
    document.getElementById('pNavSit').innerHTML = 'Pagina Principal > Herramientas > <span class="page-slct">Calculadora</span>';
    document.getElementById('hSubTxt').innerHTML = 'NUMBERS HOUSE PRESENTA:'
    document.getElementById('hTxt').innerHTML = "Historial de la Calculadora"
    document.getElementById('pHistory1').innerHTML ='<span class="spc-left"></span>Actualmente, las funciones de las calculadoras no se limitan a realizar cálculos de operadores aritméticos, pero ¿sabías que las primeras calculadoras inventadas sólo se limitaban a realizar cálculos de sumas y restas? <br> La Numbers House te invita a leer el resumen de la historia de la calculadora:';
    document.getElementById('pHistory2').innerHTML ='<span class="spc-left"></span>En definitiva, la primera calculadora inventada no es aquella con la que estamos acostumbrados a interactuar. Incluso su nombre era diferente. Hablamos de Abacus, la primera calculadora de la historia. Su creación revolucionó las matemáticas, fue creada por los chinos en el siglo VI a.C., esta herramienta tenía el poder de realizar cálculos matemáticos de suma y resta.';
    document.getElementById('pHistory3').innerHTML ='<span class="spc-left"></span>En 1942, el francés Blaise Pascal logró la hazaña de crear una nueva máquina automática para realizar cálculos. Pascal era hijo de un recaudador de impuestos, quería ayudar a su padre a mejorar su desempeño en sus servicios, gracias a ello logró desarrollar una calculadora automática, sin embargo, similar al Ábaco, esta herramienta solo podía realizar cálculos de sumas y restas.';
    document.getElementById('pHistory4').innerHTML ='<span class="spc-left"></span>Casi 30 años después, en 1671 en Alemania, el filósofo y matemático Gottfried Wilhelm Von Leibniz mejoró el proyecto de Pascal y desarrolló un mecanismo llamado “rueda graduada”. Su obra fue una calculadora capaz de realizar cálculos de sumas, restas, multiplicaciones, divisiones e incluso extraer la raíz cuadrada.';
    document.getElementById('pHistory5').innerHTML ='<span class="spc-left"></span>Cabe mencionar que todas las calculadoras inventadas hasta ahora eran de gran tamaño, ninguna cabía en nuestros bolsillos. Este hecho cambió en 1947, cuando el austriaco Curt Herztark desarrolló el diseño de la primera calculadora mecánica, reduciendo su tamaño a una taza.';
    document.getElementById('pHistory6').innerHTML ='<span class="spc-left"></span>Estas fueron las principales creaciones y modificaciones de las calculadoras, a partir de 1973 surgieron las calculadoras electrónicas. Con el paso de los años fueron surgiendo versiones más evolucionadas de estas herramientas, hasta convertirse en lo que estamos acostumbrados en nuestra vida diaria. <br> <span>Artículo publicado el 20 de mayo de 2024.</span>';
    document.getElementById('pArticles').innerHTML = 'Artículos';
    document.getElementById('pTools').innerHTML = 'Herramientas';
    document.getElementById('pAbout').innerHTML = 'Acerca de';
    document.getElementById('pLangInfo').innerHTML = 'Idiomas';
    document.getElementById('pLangWindow').innerHTML = 'Idiomas';
}

function translatePortugues() {
    document.getElementById('pCalc').innerHTML = 'Calculadora';
    document.getElementById('pNavSit').innerHTML = 'Página Principal > Ferramentas > <span class="page-slct">Calculadora</span>';
    document.getElementById('hSubTxt').innerHTML = 'NUMBERS HOUSE APRESENTA:'
    document.getElementById('hTxt').innerHTML = "História da Calculadora"
    document.getElementById('pHistory1').innerHTML ='<span class="spc-left"></span>Atualmente, as funções das calculadora não se limita apenas em realizar cálculos de operadores aritméticos, mas você sabia que as primeiras calculadoras inventadas só se limitavam em realizar cálculos de adição e subtração?<br> A Numbers House te convida para ler o resumo da história da calculadora:';
    document.getElementById('pHistory2').innerHTML ='<span class="spc-left"></span> Em resumo, a primeira calculadora inventada não é essas que estamos acostumados a interagir. Até o seu nome era diferente.Estamos falando do Ábaco, a primeira calculadora da história. Sua criação revolucionou a matemática, foi criada pelos chineses no século 6 a.C, essa ferramenta tinha o poder de realizar cálculos matemáticos de adição e subtração.';
    document.getElementById('pHistory3').innerHTML ='<span class="spc-left"></span> Em 1942, o francês Blaise Pascal obteve a façanha de criar uma nova máquina automática para realizar cálculos. Pascal era filho de um cobrar de impostos, queria ajudar seu pai a melhorar seu desempenho em seus serviços, como resultado conseguiu desenvolver uma calculadora automática, porém, semelhante ao Ábaco, essa ferramenta só conseguia realizar cálculos de adição e subtração.';
    document.getElementById('pHistory4').innerHTML ='<span class="spc-left"></span> Passaram quase 30 anos depois, no ano de 1671 na Alemanha, o filosofo e matemático Gottfried Wilhelm Von Leibniz melhorou o projeto  de Pascal desenvolveu um mecanismo denominado de “roda graduada”. Sua obra era uma calculadora capaz de realizar cálculos de adição, subtração, multiplicação, divisão e até mesmo extrair a raiz quadrada.';
    document.getElementById('pHistory5').innerHTML ='Vale ressaltar que todas as calculadoras inventadas até agora eram de grande porte, nenhuma era capaz de caber em nossos bolsos.  Esse fato muda em 1947, quando o austríaco Curt Herztark desenvolveu o projeto da primeira calculadora mecânica, reduzindo o seu  tamanho para um copo.';
    document.getElementById('pHistory6').innerHTML ='Essas foram as principais criações e modificações das calculadoras, a partir do ano de 1973 surgiu as calculadoras eletrônicas. Conforme o decorrer dos anos surgia mais versões evoluída dessas ferramentas, até se transformar no que estamos acostumados em nosso cotidiano. <br> <span>Artigo publicado em 20 de maio de 2024. </span>';
    document.getElementById('pArticles').innerHTML = 'Artigos';
    document.getElementById('pTools').innerHTML = 'Ferramentas';
    document.getElementById('pAbout').innerHTML = 'Sobre';
    document.getElementById('pLangInfo').innerHTML = 'Idiomas';
    document.getElementById('pLangWindow').innerHTML = 'Idiomas';
}
// >>>>>>>>>> function to translate into other languages <<<<<<<<<<
// >>>>>>>>>> función para traducir a otros idiomas <<<<<<<<<<
// >>>>>>>>>> função de traduzir para outros idiomas <<<<<<<<<<


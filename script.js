function btnCalc(){
    var inputNumberMulti = document.getElementById('inputNumberMulti');
    var txtNumber = document.getElementById('txtNumber');
    valorNumber = (inputNumberMulti.value);


    var nX0 = valorNumber * 0;
    var nX1 = valorNumber * 1;
    var nX2 = valorNumber * 2;
    var nX3 = valorNumber * 3;
    var nX4 = valorNumber * 4;
    var nX5 = valorNumber * 5;
    var nX6 = valorNumber * 6;
    var nX7 = valorNumber * 7;
    var nX8 = valorNumber * 8;
    var nX9 = valorNumber * 9;
    var nX10 = valorNumber * 10;


    var tabuada = `
    <p> ${valorNumber} x 0 = ${nX0}; </p>
    <p> ${valorNumber} x 1 = ${nX1}; </p>
    <p> ${valorNumber} x 2 = ${nX2}; </p>
    <p> ${valorNumber} x 3 = ${nX3}; </p>
    <p> ${valorNumber} x 4 = ${nX4}; </p>
    <p> ${valorNumber} x 5 = ${nX5}; </p>
    <p> ${valorNumber} x 6 = ${nX6}; </p>
    <p> ${valorNumber} x 7 = ${nX7}; </p>
    <p> ${valorNumber} x 8 = ${nX8}; </p>
    <p> ${valorNumber} x 9 = ${nX9}; </p>
    <p> ${valorNumber} x 10 = ${nX10}; </p>
    `

    txtNumber.innerHTML = `${tabuada}`;
}


function btnCalcX2(){
    var inputNumberX1 = document.getElementById('inputNumberX1');
    var inputNumberX2 = document.getElementById('inputNumberX2');
    valorNumber01 = (inputNumberX1.value);
    valorNumber02 = (inputNumberX2.value);
    var pValor = document.getElementById('pValor');

    var resultado = valorNumber01 * valorNumber02;

    pValor.innerHTML =`${resultado}`;
}




















function transf(){
    var euro = document.getElementById("euro");
    var dollar = document.getElementById("dollar");
    var pResultadoTransf = document.getElementById("pResultadoTransf");
    var numberx01 = document.getElementById('numberx01');
    var valorNumberX01 = (numberx01.value);


    euro = 5.55;
    dollar = 5.10;

    var resultXX =  valorNumberX01 * euro;
    var resultXX =  valorNumberX01 * dollar;



    pResultadoTransf.innerHTML = `O valor 1 ao ser transferido para o valor 2 da ao torno em: ${resultXX}`

}
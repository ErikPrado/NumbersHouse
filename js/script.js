var result = document.getElementById('result');

function insert(n){
var numberx = result.innerHTML;
result.innerHTML = numberx + n;
}

function delt(){
    var result = document.getElementById('result');
    result.innerHTML = "";
}

function resultX(){
    result
}

function back(){
    var resultX = result.innerHTML;
    result.innerHTML = resultX.substring(0, resultX.length -1);
}

function calc(){
    var resultX = result.innerHTML;

    if(resultX){
    result.innerHTML = eval(resultX);
    } 
}

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



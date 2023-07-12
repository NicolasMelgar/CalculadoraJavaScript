/*
primero debería escuchar eventos 
luego debería document.inner para tomar el valor del boton
debería tener forma de separar numeros de operaciones
la función igual debería poner el resultado en input
la función igual debería reiniciar

con esto me doy por satisfecho 
*/


const botonNumeros = document.getElementsByName("numero");
//console.log(botonNumeros);

const botonOpera = document.getElementsByName("operacion");
//console.log(botonOpera);

const botonIgual = document.getElementsByName("igual")[0];
//console.log(botonIgual);

const botonBorrar = document.getElementsByName("borrar")[0];
//console.log(botonBorrar);

var resultado = document.getElementById("resultado");
//console.log(resultado);

var opeActual = '';
var opeAnterior = '';
var operacion = undefined;


botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText); 
    })
})

botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText); 
    })
})

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
})

botonBorrar.addEventListener('click', function(){
    clear();
    actualizarDisplay();
})

function selectOperacion(op){
    if(opeActual === '') return;
    if(opeAnterior !== ''){
        calcular()
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = '';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;

        case '-':
            calculo = acterior - actual;
            break;

        case '/':
            calculo = anterior / actual;
            break;

        case 'x':
            calculo = anterior * actual;
            break;

        default:
            return;
    }

    opeActual = calculo;
    operacion = undefined;
    opeAnterior = '';
}

function agregarNumero(num){
    //lo convierto a string porque sino me sumaría los numeros en vez de concatenarlos
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}



function clear(){
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}

function actualizarDisplay(){
    resultado.value = opeActual;
}

clear();
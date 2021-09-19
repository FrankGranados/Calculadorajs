const   valorAnterior = document.getElementById("valor_anterior"),
        valorOperacion = document.getElementById("valor_operacion"),
        valorActual = document.getElementById("valor_actual"),
        keys = document.getElementById("keys")

var status_op = false

keys.addEventListener("click", e => {
    var tipo = e.target.id
    var valor = e.target.value
        
    switch (tipo) {
        case "numero":
            imprimirNumero(valor) 
            break;

        case "operador":
            imprimirOperacion(valor)
            break;

        case "equal":
            operacion()
            break;

        case "clean":
            clear()

        default:
            break;
    }        

    
})


function imprimirNumero (valor) {
    var l = valorActual.textContent.length //Longitud del valor actual
    var a = valorActual.textContent
    
    if (l > 14) {
        return
    } if ( status_op == false ) {
        valorActual.textContent += valor
    } if ( a == 0 || status_op == true ) {
        valorActual.textContent = valor
        status_op = false
    }
}

function imprimirOperacion(valor,num01) {
    valorAnterior.textContent = valorActual.textContent
    valorOperacion.textContent = valor
    status_op = true
}

function operacion() {
    var num01 = document.getElementById("valor_anterior").textContent;
    var op = document.getElementById("valor_operacion").textContent;
    var num02 = document.getElementById("valor_actual").textContent;
    var resultado

    status_op = true
    
    switch (op) {
        case "+":
            resultado = Number(num01) + Number (num02)
            break;
        case "-":
            resultado = Number(num01) - Number (num02)
            break;
        case "/":
            resultado = Number(num01) / Number (num02)
            break;
        case "x":
            resultado = Number(num01) * Number (num02)
            break;
         case "undefined":
            resultado = Number(num01)
            break;
        default:
            resultado = num01
            break;
    }

    valorAnterior.textContent = num01 + " " + op + " " + num02 
    valorOperacion.textContent = null
    valorActual.textContent = resultado

    console.log(num01)
    console.log(op)
    console.log(num02)
    console.log(resultado)
}



function clear () {
    valorAnterior.textContent = null
    valorOperacion.textContent = null
    valorActual.textContent = 0
    
}



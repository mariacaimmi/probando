const Calcular = () => {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var r;
    var op = document.getElementById("operacion").value;
    var m = "El resultado de la";
      
    
    switch(op){       
        case "-" :
            r = num1 - num2;
            m += "resta";
            break;
        case "*" :
            r = num1 * num2;
            m += "multiplicación";
            break;
        case "/" :
            r = num1 / num2;
            m += "división";
            break;
        case "+" :
            r = num1 + num2;
            m += "suma";
            break;
    }
    console.log(`${m} es : ${r}`)
    document.getElementById("resultado").value = r;

}



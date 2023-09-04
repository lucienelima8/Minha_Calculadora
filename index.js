function calcular() {
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let total = 0

    if (document.getElementById('btnSomar').checked)
        total = num1 + num2
    else if (document.getElementById('btnSubtrair').checked)
        total = num1 - num2
    else if (document.getElementById('btnMultiplicar').checked)
        total = num1 * num2
    else 
        total = num1 / num2 
    document.getElementById('resultArea').innerHTML = 'Resultado: ' + String(total)
    

}
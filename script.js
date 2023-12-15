function calculateIMC() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    if (weight && height) {
        var imc = weight / (height * height);
        var classification = getIMCClassification(imc);

        var result = `Seu IMC é ${imc.toFixed(2)} - ${classification}`;
        document.getElementById("result").innerText = result;
    } else {
        document.getElementById("result").innerText = "Por favor, preencha peso e altura.";
    }
}

function getIMCClassification(imc) {
    if (imc < 16.9) {
        return "Muito abaixo do peso";
    } else if (imc >= 17 && imc <= 18.4) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Acima do peso";
    } else if (imc >= 30 && imc <= 34.9) {
        return "Obesidade grau I";
    } else if (imc >= 35 && imc <= 40) {
        return "Obesidade grau II";
    } else {
        return "Obesidade grau III";
    }
}
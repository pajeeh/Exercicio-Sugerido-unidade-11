function showAll() {
    var myForm = document.forms["formulario"];

    document.getElementById("campos").innerHTML = "Dados Fornecidos:";

    // Verifica Nome:
    document.getElementById("show_nome").innerHTML = "Nome: " + myForm["firstName"].value;

    // Verifica radioButtons:
    var radios = myForm["sexo"];
    if (radios[0].checked) {
        document.getElementById("show_sexo").innerHTML = "Sexo: Masculino";
    }
    else {
        if (radios[1].checked) {
            document.getElementById("show_sexo").innerHTML = "Sexo: Feminino";
        }
        else {
            document.getElementById("show_sexo").innerHTML = "Sexo: Não definido";
        }
    }

    // Verifica estado civil:
    var selection = myForm["estadoCivil"];
    document.getElementById("show_estadoCivil").innerHTML = "Estado Civil: " + selection[selection.selectedIndex].value;

    // Verifica bens financiados:
    var financiamentos = myForm["bens"];
    var bens = "Bens Financiados: ";
    for (var i = 0; i < financiamentos.length; i++) {
        if (financiamentos[i].checked) {
            bens += financiamentos[i].value + " ";
        }
    }
    document.getElementById("show_bensFinanciados").innerHTML = bens;

    return false;
}


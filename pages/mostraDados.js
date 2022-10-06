function mostraDados() {
    var myForm = document.forms["formDados"];

    document.getElementById("campos").innerHTML = "Dados do formulário:";

    document.getElementById("show_nome").innerHTML = "Nome: " + myForm["nome"].value;

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

    var selection = myForm["EstadoCivil"];
    document.getElementById("show_estadoCivil").innerHTML = "Estado Civil: " + selection[selection.selectedIndex].value;

    var financiamentos = myForm["BensFinanciados"];
    var bens = "Bens Financiados: ";
    for (var i = 0; i < financiamentos.length; i++) {
        if (financiamentos[i].checked) {
            bens += financiamentos[i].value + " ";
        }
    }
    document.getElementById("show_bensFinanciados").innerHTML = bens;

    return false;
}

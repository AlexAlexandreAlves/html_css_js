var selectedRow = null
//Função para os tratamento no campo nome
function onFormSubmit() {
    if (validateName()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}


//Funçaõ para ler o formulário
function readFormData() {
    var formData = {};
    formData["nomeCompleto"] = document.getElementById("nomeCompleto").value;
    formData["telefone"] = document.getElementById("telefone").value;
    formData["nomedojogo"] = document.getElementById("nomedojogo").value;
    formData["palaforma"] = document.getElementById("palaforma").value;
    return formData;
}
//Inserting new Datas
function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nomeCompleto;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.telefone;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.nomedojogo;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.palaforma;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}
//Função para resetar o formulário 
function resetForm() {
    document.getElementById("nomeCompleto").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("nomedojogo").value = "";
    document.getElementById("palaforma").value = "";
    selectedRow = null;
}
//Função para editar os dados
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nomeCompleto").value = selectedRow.cells[0].innerHTML;
    document.getElementById("telefone").value = selectedRow.cells[1].innerHTML;
    document.getElementById("nomedojogo").value = selectedRow.cells[2].innerHTML;
    document.getElementById("palaforma").value = selectedRow.cells[3].innerHTML;
}
//Função para alterar os dados
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nomeCompleto;
    selectedRow.cells[1].innerHTML = formData.telefone;
    selectedRow.cells[2].innerHTML = formData.nomedojogo;
    selectedRow.cells[3].innerHTML = formData.palaforma;
}
//Função para confirmar deletar
function onDelete(td) {
    if (confirm('Deseja deletar ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
//Função para validar os dados nos campos
function validateName() {
    isValid = true;
    if (document.getElementById("nomeCompleto").value == "") {
        isValid = false;
        document.getElementById("nomeCompletoValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nomeCompletoValidationError").classList.contains("hide"))
            document.getElementById("nomeCompletoValidationError").classList.add("hide");
    }
    return isValid;
}




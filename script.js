var selectedRow = null
//************************************************************************
//Função para os tratamento no campo nome no qual estou lendo o formulário
//e aferindo se o campo Nome está como vazio.
//************************************************************************ 
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

//************************************************************************ 
//Funçaõ para ler os dados inseridos no formulário, recebendo os elementos
// criados como ID no html e atribuindo a um getElementBId
//************************************************************************ 
function readFormData() {
    var formData = {};
    formData["nomeCompleto"] = document.getElementById("nomeCompleto").value;
    formData["telefone"] = document.getElementById("telefone").value;
    formData["nomedojogo"] = document.getElementById("nomedojogo").value;
    formData["palaforma"] = document.getElementById("palaforma").value;
    return formData;
}
//************************************************************************ 
//Inserindo novo registro, buscando através do ID da tabela (employeeList), 
//e atribuindo com o cell pegando as posições dos campos.
//************************************************************************ 
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
                       <a onClick="onDelete(this)">Delete</a>`; //Caso seja utilizado os botões de Edit ou Delete
}
//************************************************************************ 
//Função para resetar o formulário atribuindo um valor em branco ""
//************************************************************************ 
function resetForm() {
    document.getElementById("nomeCompleto").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("nomedojogo").value = "";
    document.getElementById("palaforma").value = "";
    selectedRow = null;
}
//************************************************************************ 
//Função para editar os dados, pegando os dados através do getElementById,
// selecionando a linha e e sobrescrevendo ou alterando com o inneerHTML.
//************************************************************************ 
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nomeCompleto").value = selectedRow.cells[0].innerHTML;
    document.getElementById("telefone").value = selectedRow.cells[1].innerHTML;
    document.getElementById("nomedojogo").value = selectedRow.cells[2].innerHTML;
    document.getElementById("palaforma").value = selectedRow.cells[3].innerHTML;
}
//************************************************************************ 
//Função para atualizar todos os dados através do formulário
//************************************************************************ 
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nomeCompleto;
    selectedRow.cells[1].innerHTML = formData.telefone;
    selectedRow.cells[2].innerHTML = formData.nomedojogo;
    selectedRow.cells[3].innerHTML = formData.palaforma;
}
//************************************************************************ 
//Função para deletar com confirmação
//************************************************************************ 
function onDelete(td) {
    if (confirm('Deseja deletar ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
//************************************************************************ 
//Função para validar se o dado nomeCompleto foi de fato inserido.
//************************************************************************ 
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




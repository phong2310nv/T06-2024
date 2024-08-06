
const addStudentButton = document.querySelector(".add-info");
function addStudent(e) {
    e.preventDefault();
    const studentID = document.getElementById('studentID').value;
    const studentName = document.getElementById('studentName').value;
    const studentBirth = document.getElementById('studentBirth').value;
    const MathScore = document.getElementById('MathScore').value;
    const PhysicScore = document.getElementById('PhysicScore').value;
    

    const table = document.getElementById("studentTableBody");
    const row = table.insertRow();
    row.insertCell(0).innerText = studentID;
    row.insertCell(1).innerText = studentName;
    row.insertCell(2).innerText = studentBirth;
    row.insertCell(3).innerText = MathScore;
    row.insertCell(4).innerText = PhysicScore;
    const actionCell = row.insertCell(5);
    actionCell.innerHTML = '<button class="btn btn-danger btn-sm" onclick="deleteRow(this)">Xóa</button> <button class="btn btn-warning btn-sm" onclick="editRow(this)">Edit</button>';
}
addStudentButton.addEventListener("click", addStudent);


 

const addStudentButton = document.querySelector(".add-info");
const resetButton = document.querySelector(".reset-info");
function addStudent() {
    const studentID = document.getElementById('studentID').value;
    const studentName = document.getElementById('studentName').value;
    const studentBirth = document.getElementById('studentBirth').value;
    const MathScore = document.getElementById('MathScore').value;
    const PhysicScore = document.getElementById('PhysicScore').value;
      // Kiểm tra xem studentID đã tồn tại trong bảng hay chưa
    const existingIDs = document.querySelectorAll('#studentTableBody tr td:first-child');
    for (let i = 0; i < existingIDs.length; i++) {
        if (existingIDs[i].textContent === studentID) {
            alert('Student ID đã tồn tại trong bảng. Vui lòng nhập ID khác.');
            return; // Ngăn chặn việc thêm dòng mới
        }
    }


    if (studentID && studentName && studentBirth && MathScore || PhysicScore) {
        const table = document.getElementById("studentTableBody");
        table.innerHTML += `
    <tr>
    <td>${studentID}</td>
    <td>${studentName}</td>
    <td>${studentBirth}</td>
    <td>${MathScore}</td>
    <td>${PhysicScore}</td>
    <td> <button class="btn btn-primary"> Edit </button>
    <button class="btn delete-btn"> Delete </button></td>
    </tr>`
    }
    // xử lý trùng studentID

    
     const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', deleteRow);
    });

}
function resetInfo() {
    document.getElementById('studentID').value = "";
    document.getElementById('studentName').value = "";
    document.getElementById('studentBirth').value = "";
    document.getElementById("MathScore").value = "";
    document.getElementById("PhysicScore").value = "";  
    document.getElementById("studentTableBody").innerHTML = "";
}
function deleteRow(event) {
    // Lấy phần tử đã được nhấn (nút Delete)
    const button = event.target;
    
    // Tìm phần tử <tr> gần nhất chứa nút Delete vừa được nhấn
    const row = button.closest("tr");
    
    // Xóa dòng đó khỏi bảng
    row.remove();
}
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Ngăn chặn hành động mặc định của phím Enter
        addStudent();
    }
});
addStudentButton.addEventListener("click", addStudent);
resetButton.addEventListener("click", resetInfo);   





